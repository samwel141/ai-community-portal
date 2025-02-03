import { CacheEntryType } from "~/utils/cache/cache-manager";

export interface CacheAdapter<TData = unknown> {
    has: (queryHash: string) => boolean;
    set: (queryHash: string, query: CacheEntryType<TData>) => void;
    get: (queryHash: string) => CacheEntryType<TData> | undefined;
    delete: (queryHash: string) => void;
    values: () => IterableIterator<CacheEntryType<TData>>;
}

export class InMemoryCacheAdapter<TData = unknown>
    implements CacheAdapter<TData>
{
    #cache: Map<string, CacheEntryType<TData>> = new Map();

    has(queryHash: string): boolean {
        return this.#cache.has(queryHash);
    }

    set(queryHash: string, query: CacheEntryType<TData>): void {
        this.#cache.set(queryHash, query);
    }

    get(queryHash: string): CacheEntryType<TData> | undefined {
        return this.#cache.get(queryHash);
    }

    delete(queryHash: string): void {
        this.#cache.delete(queryHash);
    }

    values(): IterableIterator<CacheEntryType<TData>> {
        return this.#cache.values();
    }
}
