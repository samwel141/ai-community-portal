import { ErrorResponse, isRouteErrorResponse } from "@remix-run/react";
import { z } from "zod";

const errorResponseSchema = z.object({
    status: z.number(),
    data: z.any(),
    statusText: z.string(),
});

const NON_STANDARD_ERROR_CODE = 782;

const defaultErrorResponse: ErrorResponse = {
    status: NON_STANDARD_ERROR_CODE,
    data: { message: "Unexpected Error has occurred" },
    statusText: "Unexpected Error has occurred",
};

export const parseErrorResponse = (_error: unknown): ErrorResponse => {
    const error = _error as { message?: string };

    if (isRouteErrorResponse(error)) {
        return error;
    }

    if (typeof error?.message === "string") {
        try {
            const errorObject = JSON.parse(error.message);
            const result = errorResponseSchema.safeParse(errorObject);
            if (result.success) {
                return result.data as ErrorResponse;
            }
        } catch {
            // JSON parsing failed, fall through to default
        }
    }

    return defaultErrorResponse;
};

export const isCustomErrorResponse = (_error: unknown): boolean => {
    const error = _error as { message?: string };
    if (isRouteErrorResponse(error)) {
        return true;
    }

    if (Boolean(error?.message) && typeof error?.message === "string") {
        try {
            const errorObject = JSON.parse(error?.message);
            return errorResponseSchema.safeParse(errorObject).success;
        } catch {
            return false;
        }
    }

    return false;
};
