import { useEffect } from "react";

interface EventListenerOptions extends AddEventListenerOptions {
    disabled?: boolean;
}
/**
 * Registers an event listener and removes it when the component unmounts.
 *
 * @param {string} eventName - The event name to listen for.
 * @param {Function} callback - The callback function to be executed when the event is triggered.
 * @param options
 * @returns {void}
 *
 * @example
 * useEventListener('scroll', handleScroll);
 *
 */
export const useEventListener = (
    eventName: keyof WindowEventMap | string,
    callback: VoidFunction,
    options: EventListenerOptions = {}
): void => {
    const { disabled = false, ...rest } = options;

    useEffect(() => {
        if (!disabled) {
            window.addEventListener(eventName, callback, rest);
        }
        return () => window.removeEventListener(eventName, callback);
    }, []);
};
