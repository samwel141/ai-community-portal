import { SubmitOptions, useSubmit } from "@remix-run/react";

export type SubmitTarget =
    | HTMLFormElement
    | HTMLButtonElement
    | HTMLInputElement
    | FormData
    | URLSearchParams
    | null;

type UseSubmitData<T = unknown> = (data: T, options?: SubmitOptions) => void;

/**
 * A custom hook that returns a function to submit data.
 * The returned function takes data and optional submission options as arguments,
 * converts the data to a JSON string, and submits it using the specified
 * submission options.
 *
 * @typeparam T - The type of data being submitted.
 *
 * @returns {UseSubmitData<T>} - Function that submits the provided data
 *                               with specified options.
 */
const useSubmitData = <T = unknown>(): UseSubmitData<T> => {
    const submit = useSubmit();

    return (data: T, options?: SubmitOptions) => {
        submit(data as never as SubmitTarget, {
            method: "post",
            encType: "application/json",
            ...options,
        });
    };
};

export default useSubmitData;
