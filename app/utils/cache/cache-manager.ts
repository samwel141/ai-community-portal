import { remember } from "@epic-web/remember";
import { CacheAdapter, InMemoryCacheAdapter } from "~/utils/cache/adapters";

export interface CacheEntryType<TData = unknown> {
    key: string;
    data: TData;
    ttl: number;
    expiry?: number;
}

type DeleteEventName<T extends string = string> = `delete:${T}`;
type UpdateEventName<T extends string = string> = `update:${T}`;
type AddEventName<T extends string = string> = `add:${T}`;
type InvalidateEventName<T extends string = string> = `invalidate:${T}`;

const actions = ["delete", "update", "add", "invalidate"] as const;
type CacheActions = (typeof actions)[number];

export type EventName<T extends string = string> =
    | DeleteEventName<T>
    | UpdateEventName<T>
    | InvalidateEventName<T>
    | AddEventName<T>;

class CacheManager<TData = unknown> {
    #adapter: CacheAdapter<TData>;
    #events = new Map<EventName, CustomEvent<unknown>>();
    #observers = new Set();

    constructor(adapter: CacheAdapter<TData>) {
        this.#adapter = adapter;

        this.runGc = this.runGc.bind(this);
    }

    /**
     * Sets a cache entry with a specified key and value.
     * @param key The key for the cache entry.
     * @param entry The cache entry to store.
     */
    set(key: string, entry: CacheEntryType<TData>): void {
        const entryWithExpiry = { ...entry, expiry: Date.now() + entry.ttl };
        this.#adapter.set(key, entryWithExpiry);
        this.registerEventsForKey(key);
    }

    /**
     * Retrieves a cache entry by its key.
     * @param key The key for the cache entry.
     * @returns The cache entry if present, otherwise undefined.
     */
    get<T = unknown>(key: string): T | undefined {
        return this.#adapter.get(key) as T;
    }

    /**
     * Deletes a cache entry by its key.
     * @param key The key for the cache entry.
     */
    delete(key: string): void {
        this.#adapter.delete(key);
        this.dispatchEvent(this.createEventKey("delete", key));
        this.removeEvent(key);
    }

    /**
     * Dispatches an event for a given event key.
     * @param eventKey The event key to dispatch.
     */
    dispatchEvent(eventKey: EventName): void {
        const eventDispatcher = this.#events.get(eventKey);
        if (eventDispatcher) {
            window.dispatchEvent(eventDispatcher);
        }
    }

    /**
     * Generates a unique event key based on the action and cache key.
     * @param action The cache action (for example, "delete").
     * @param key The cache key.
     * @returns The event name.
     */
    createEventKey(action: CacheActions, key: string): EventName {
        return `${action}:${key}`;
    }

    addObserver(key: string) {
        this.#observers.add(key);
    }

    removeObserver(key: string) {
        this.#observers.delete(key);
    }

    /**
     * Cleans up expired cache entries.
     */
    runGc(): void {
        for (const entry of this.#adapter.values()) {
            if (this.hasExpired(entry)) {
                this.delete(entry.key);
            }
        }
    }

    dispatchInvalidateEvent(key: string): void {
        this.dispatchEvent(this.createEventKey("invalidate", key));
    }

    /**
     * Registers events for all actions on a specific cache key.
     * @param cacheKey The cache key to register events for.
     */
    private registerEventsForKey(cacheKey: string): void {
        for (const action of actions) {
            this.addEvent(action as CacheActions, cacheKey);
        }
    }

    /**
     * Checks if a cache entry has expired.
     * @param entry The cache entry to check.
     * @returns True if the entry has expired, otherwise false.
     */
    private hasExpired(entry: CacheEntryType<TData>): boolean {
        return (
            Number(entry.expiry) <= Date.now() &&
            !this.#observers.has(entry.key)
        );
    }

    /**
     * Creates a custom event with the given name and optional data.
     * @param eventName The name of the event.
     * @param data Optional data to include with the event.
     * @returns The created custom event.
     */
    private createEvent(
        eventName: EventName,
        data?: unknown
    ): CustomEvent<unknown> {
        return new CustomEvent(eventName, { detail: data });
    }

    /**
     * Adds an event for a specific action and cache key.
     * @param action The cache action (for example, "delete").
     * @param key The cache key.
     */
    private addEvent(action: CacheActions, key: string): void {
        const eventKey = this.createEventKey(action, key);
        const customEvent = this.createEvent(eventKey);
        this.#events.set(eventKey, customEvent);
    }

    /**
     * Removes an event for a given cache key.
     * @param entryKey The cache key to remove the event for.
     */
    private removeEvent(entryKey: string): void {
        this.#events.delete(this.createEventKey("delete", entryKey));
    }
}

export const $cache = remember(
    "$cache",
    () => new CacheManager(new InMemoryCacheAdapter())
);
