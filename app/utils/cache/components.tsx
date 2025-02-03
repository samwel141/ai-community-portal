import { SerializeFrom } from "@remix-run/node";
import { useFetcher, useLocation } from "@remix-run/react";
import {
    FC,
    Fragment,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { useEventListener } from "~/hooks/useEventListener";
import { $cache, CacheEntryType } from "~/utils/cache/cache-manager";
import {
    unwrapNestedPromise,
    UnwrapNestedPromise,
} from "~/utils/cache/unwrap-nested-promise";

type UseCachedFetcher<T> = {
    data: UnwrapNestedPromise<SerializeFrom<T>> | undefined;
    isLoading: boolean;
    isFetching: boolean;
    key: string;
};
const DEFAULT_TTL = 120_000; // Minute 2

export interface FetchOptions {
    resource?: string;
    /**
     * Control when to run fetch data
     * @default false
     */
    enabled?: boolean;
    refetchOn?: Array<keyof WindowEventMap | "mount" | string>;
    ttl?: number;
    shouldCache?: boolean;
    // Todo: Allow to pass initial data
}

export type FetchOptionsWithoutResource = Omit<FetchOptions, "resource">;

export const useCachedFetcher = <T = unknown,>(
    options?: FetchOptions
): UseCachedFetcher<T> => {
    type LoaderData = SerializeFrom<T>;

    const currentLocation = useLocation();

    const resourceToFetchFrom = useMemo(() => {
        return options?.resource ?? currentLocation.pathname;
    }, [options?.resource]);

    const cachedData =
        $cache.get<UnwrapNestedPromise<LoaderData>>(resourceToFetchFrom);

    const [data, setData] = useState<
        UnwrapNestedPromise<LoaderData> | undefined
    >(() => cachedData);

    const [error, setError] = useState<unknown>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(true);

    const {
        load,
        state,
        data: fetcherData,
    } = useFetcher({ key: resourceToFetchFrom });

    const isLoading = state !== "idle" && !cachedData;
    const shouldFetch = options?.enabled ?? true;
    const shouldCache = options?.shouldCache ?? true;

    const events = useMemo(() => {
        return (options?.refetchOn ?? []).filter((e) => e !== "mount");
    }, [options?.refetchOn]);

    const updateDataStateAndCache = useCallback(
        async (dataFromServer: UnwrapNestedPromise<LoaderData>) => {
            const { data, error } = await unwrapNestedPromise(dataFromServer);

            setIsFetching(false);
            setIsFirstTime(false);

            if (error) return setError(error);
            else {
                if (shouldCache) {
                    const cacheEntry: CacheEntryType = {
                        data,
                        key: resourceToFetchFrom,
                        ttl: options?.ttl ?? DEFAULT_TTL,
                    };

                    $cache.set(resourceToFetchFrom, cacheEntry);
                }
                return setData(data!);
            }
        },
        [resourceToFetchFrom]
    );

    /**
     * Tracks any errors and throws them to be caught by the nearest error boundary.
     */
    useEffect(() => {
        if (!isLoading && error) {
            throw error;
        }
    }, [error, isLoading]);

    const fetchDataFromServer = useCallback(() => {
        if (isLoading) return;

        if (!isFirstTime) {
            setIsFetching(true);
        }

        try {
            load(resourceToFetchFrom);
        } catch (e) {
            setError(e);
        }
    }, [isLoading, isFirstTime, load, resourceToFetchFrom]);

    //--------------------------------------------------------------

    useEffect(() => {
        if (shouldFetch) {
            fetchDataFromServer();
        }
    }, [resourceToFetchFrom, shouldFetch]);

    //--------------------------------------------------------------

    /**
     *  Handle 'data fetch'.
     *  When 'dataFetcher.data' changes, implying that we have new data from the server,
     *  we run the 'updateDataStateAndCache' function to cache the data for future use.
     */
    useEffect(() => {
        if (fetcherData) {
            const dataFromServer =
                fetcherData as UnwrapNestedPromise<LoaderData>;
            updateDataStateAndCache(dataFromServer).then();
        }
    }, [fetcherData, updateDataStateAndCache]);

    //--------------------------------------------------------------

    useEffect(() => {
        events.forEach((_event) =>
            window.addEventListener(_event, fetchDataFromServer)
        );
        return () => {
            events.forEach((_event) =>
                window.removeEventListener(_event, fetchDataFromServer)
            );
        };
    }, []);

    useEventListener(`invalidate:${resourceToFetchFrom}`, () => {
        console.log("[invaliding...]");
        fetchDataFromServer();
    });

    useCacheObserver(resourceToFetchFrom);

    return {
        data,
        isLoading,
        isFetching: isFetching,
        key: resourceToFetchFrom,
    };
};

const useCacheObserver = (key: string) => {
    useEffect(() => {
        $cache.addObserver(key);
        return () => $cache.removeObserver(key);
    }, [key]);
};

export const CacheProvider: FC<{ children: ReactNode; gcTime?: number }> = ({
    children,
    gcTime = 60_000,
}) => {
    const $gcIntervalRef = useRef<ReturnType<typeof setInterval>>();

    useEffect(() => {
        $gcIntervalRef.current = setInterval($cache.runGc, gcTime);
        return () => {
            clearInterval($gcIntervalRef.current);
        };
    }, []);

    return <Fragment>{children}</Fragment>;
};

export const useCachedData = <T,>(key: string) => {
    const cacheEntry = $cache.get<CacheEntryType<T>>(key);
    return cacheEntry?.data;
};
