import { useRef } from "react";

type Callback<T> = (value: T) => void;
const DEBOUNCE_TIMEOUT = 300;

type DebouncedHandler<T> = (value: T) => void;

/**
 * Custom hook that returns a debounced function that delays the execution of the provided callback.
 *
 * @function
 * @param {Function} callback - The function to be executed after the debounce time.
 * @param {number} [debounce=DEBOUNCE_TIMEOUT] - The debounce delay time in milliseconds.
 * @returns {DebouncedHandler} - A debounced version of the provided callback function.
 */
const useDebounce = <T>(
    callback: Callback<T>,
    debounce?: number
): DebouncedHandler<T> => {
    const timeoutRef = useRef<NodeJS.Timeout>();

    return (value: T) => {
        if (timeoutRef.current) {
            clearInterval(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            callback(value);
        }, debounce ?? DEBOUNCE_TIMEOUT);
    };
};

export default useDebounce;
