import type { ErrorResponse } from "@remix-run/node";

export const throwCustomError = (message: string, statusCode: number) => {
    const error: ErrorResponse = {
        status: statusCode,
        data: { message },
        statusText: message,
    };

    throw new Error(JSON.stringify(error));
};
