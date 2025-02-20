import { redirect } from "@remix-run/node";
import { redirectWithSuccess } from "remix-toast";
import {
    HTTP_BAD_REQUEST,
    HTTP_FORBIDDEN,
    HTTP_INTERNAL_SERVER_ERROR,
    HTTP_METHOD_NOT_ALLOWED,
    HTTP_NOT_ACCEPTABLE,
    HTTP_NOT_FOUND,
    HTTP_SERVICE_NOT_AVAILABLE,
} from "~/constants";
import type { ErrorType } from "~/utils/safe-execute.server";
import { throwCustomError } from "~/utils/throw-custom-error";

type RedirectUrl = FormDataEntryValue | string | null | undefined;
type JsonFunction = <T>(data: T) => Response;


const validatedRedirectUrl = (redirectUrl: RedirectUrl) => {
    if (
        !redirectUrl ||
        typeof redirectUrl !== "string" ||
        !redirectUrl.startsWith("/") ||
        redirectUrl.startsWith("//")
    ) {
        return "/";
    }
    return redirectUrl;
};

/**
 * Redirects the user to the specified URL if it passes the safety checks. If the URL fails the safety checks, the user is redirected to the homepage by default.
 *
 * @param {RedirectUrl} to - The URL to redirect the user to.
 * @param {number | ResponseInit} [init] - Optional. The parameters for the redirect request.
 * @return {Response} The response from the redirect request.
 */
export function safeRedirect(
    to: RedirectUrl,
    init?: number | ResponseInit
): Response {
    const redirectTo = validatedRedirectUrl(to);
    return redirect(redirectTo, init);
}

/**
 * Safely redirects to a validated URL with a success message.
 *
 * This function ensures that the provided redirect URL is validated
 * before performing the redirect and attaching a success message.
 * Optionally, additional response initialization parameters can be passed.
 *
 * @param {RedirectUrl} to - The target URL for redirection.
 * @param {string} message - The success message to be conveyed.
 * @param {ResponseInit} [init] - Optional response initialization parameters.
 * @returns A redirection response with the success message.
 */
export const safeRedirectWithSuccess = (
    to: RedirectUrl, 
    message: string, 
    init?: ResponseInit
) => {
    const redirectTo = validatedRedirectUrl(to);
    return redirectWithSuccess(redirectTo, message, init);
};

/**
 * This helper function helps us to return the accurate `HTTP` status,
 * `400` Bad Request, to the client.
 */export const badRequest = <T>(data: T) =>
    new Response(JSON.stringify(data), {
        status: HTTP_BAD_REQUEST,
        headers: {
            "Content-Type": "application/json",
        },
    });

/**
 * This helper function helps us to return the accurate `HTTP` status,
 * `404` Object not found, to the client.
 */
export const objectNotFound = <T>(data: T) =>
    new Response(JSON.stringify(data), {
        status: HTTP_NOT_FOUND,
        headers: { "Content-Type": "application/json" },
    });

/**
 * This helper function helps us to return the accurate `HTTP` status,
 * `406` not acceptable request, to the client.
 */
export const notAcceptable = (message: string) => {
    return throwCustomError(message, HTTP_NOT_ACCEPTABLE);
};

/**
 * This helper function helps us to return the accurate `HTTP` status,
 * `406` not acceptable request, to the client.
 */
export const servicesNotAvailable = <T>(data: T) =>
    new Response(JSON.stringify(data), {
        status: HTTP_SERVICE_NOT_AVAILABLE,
        headers: { "Content-Type": "application/json" },
    });
/**
 * This helper function helps us to return the accurate `HTTP` status,
 * `403` forbidden request, to the client.
 */
export const unauthorized = <T>(data: T) =>
    new Response(JSON.stringify(data), {
        status: HTTP_FORBIDDEN,
        headers: { "Content-Type": "application/json" },
    });
/**
 * Sends a JSON response with the provided data and sets the HTTP status code to 500 (Internal Server Error).
 *
 * @template T The type of the data to be sent in the response.
 * @param {T} data The data to be sent in the response.
 * @returns {Omit<Response, "json"> & { json(): Promise<T> }} - The objectNotFound response object.
 */
export const internalServerError = <T>(data: T) =>
    new Response(JSON.stringify(data), {
        status: HTTP_INTERNAL_SERVER_ERROR,
        headers: { "Content-Type": "application/json" },
    });
/**
 * Function to handle invalid data returned from the server.
 *
 * - No return value.
 * @param message
 */
export const invalidDataReturned = (message: string) =>
    new Response(JSON.stringify({ message }), {
        status: HTTP_METHOD_NOT_ALLOWED,
        headers: { "Content-Type": "application/json" },
    });
    
const ErrorResponseMap: Record<number, JsonFunction> = {
    [HTTP_BAD_REQUEST]: badRequest,
    [HTTP_INTERNAL_SERVER_ERROR]: internalServerError,
    [HTTP_SERVICE_NOT_AVAILABLE]: servicesNotAvailable,
    [HTTP_NOT_FOUND]: objectNotFound,
    [HTTP_FORBIDDEN]: unauthorized,
};

export const throwError = (error: ErrorType) => {
    const resFunc = ErrorResponseMap[error.status];
    const errorFunc = resFunc ?? servicesNotAvailable;
    throw errorFunc(error);
    // throw new Error(error.message);
};

/**
 * Throws an unauthorized error.
 *
 * @returns {void}
 */
export const throwUnauthorizedError = () => {
    return throwError({
        status: HTTP_FORBIDDEN,
        message: `You are not authorized to view this page. If this is a mistake, contact your admin.`,
    });
};
