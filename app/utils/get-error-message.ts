/**
 * Retrieves the error message from the given error object or string.
 * If the error is a string, it will be returned directly.
 * If the error is an object with a 'message' property of type string, the value of that property will be returned.
 * If the error is neither a string nor an object with a 'message' property, an error message will be logged to the console and 'Unknown Error' will be returned.
 *
 * @param {string|object} error - The error object or string from which to retrieve the error message.
 * @return {string} - The error message.
 */
const getErrorMessage = (error: unknown): string => {
    if (typeof error === "string") return error;
    if (
        error &&
        typeof error === "object" &&
        "message" in error &&
        typeof error.message === "string"
    ) {
        return error.message ?? "Unknown error has occurred";
    }
    return "Unknown Error";
};

export default getErrorMessage;
