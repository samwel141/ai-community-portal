import { redirect } from "@remix-run/node";
import { AxiosError } from "axios";
import {
    HTTP_SERVICE_NOT_AVAILABLE,
    HTTP_UNAUTHORIZED,
    NETWORK_ERROR_CODE,
} from "~/constants";
import { isDevMode } from "~/utils/is-dev-environment";
import { throwError } from "~/utils/request.server";

export type ErrorType = { message: string; status: number };

export type SafeExecuteReturnType<U> = [
    error: ErrorType | null,
    data: U | null,
];

type ErrorData = {
    cause: string;
    message: string;
    description?: string;
};

async function getHandledErrorResponse(
    error: unknown
): Promise<{ message: string; status: number }> {
    if (isDevMode) {
        console.log("[error]", error);
    }

    if (error instanceof AxiosError) {
        const errorData = error.response?.data as ErrorData;
        const statusCode = error.response?.status;

        // handle network error
        if (NETWORK_ERROR_CODE.includes(String(error.code))) {
            throwError({
                message: "Unable to connect to the server",
                status: HTTP_SERVICE_NOT_AVAILABLE,
            });
        }

        // Handle unauthorized user by clearing the session and redirecting them to the login page
        if (statusCode === HTTP_UNAUTHORIZED) {
            throw redirect("/logout");
        }

        //--------------------------------------------------------------

        return {
            message: errorData?.message,
            status: Number(error.response?.status),
        };
    }
    throw error;
}

/**
 * Executes a given function in a safe manner by handling any errors that occur.
 * @param {Function} func - The function to be executed.
 * @returns {Function} -
 * A function that executes the given function safely and returns { a data, error } object.
 * @template T - The tuple of arguments for the given function.
 * @template U - The return type of the given function.
 */
function safeExecute<T extends Array<unknown>, U>(
    func: (...args: T) => Promise<U>
): (...args: T) => Promise<SafeExecuteReturnType<U>> {
    return async (...args: T): Promise<SafeExecuteReturnType<U>> => {
        try {
            const data = await func(...args);
            return [null, data];
        } catch (error: unknown) {
            const errorInfo = await getHandledErrorResponse(error);
            return [errorInfo, null];
        }
    };
}

export default safeExecute;
