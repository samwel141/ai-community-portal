import { jsonWithError } from "remix-toast";
import { FormErrorType } from "~/types";
import { ErrorType } from "~/utils/safe-execute.server";

export const formError = <T = unknown>(error: ErrorType, formData?: T) => {
    return jsonWithError<FormErrorType<T>>(
        {
            formData,
            errorMessage: error.message,
        },
        error.message,
        { status: error.status }
    );
};
