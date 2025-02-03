import { useLocation } from "@remix-run/react";

/**
 * Retrieves the state from the current URL location.
 * @template TData - The type of data expected to be returned.
 * @returns {TData | undefined} - The state from the current URL location, or `undefined` if not found.
 */
const useLocationState = <TData = unknown>(): TData | undefined => {
    const location = useLocation();
    return location?.state as TData | undefined;
};

export default useLocationState;
