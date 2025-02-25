import { redirect } from "@remix-run/node";
import {
    AuthUserSchemaWithRoleSchema,
    AuthUserSchemaWithRoleType,
} from "~/api/login/auth-user-schema";
import { login } from "~/api/login/login";
import { LoginFormType } from "~/api/login/login-form-schema";
import { validateApiResponse } from "~/utils/data-validator.server";
import { formError } from "~/utils/from-error";
import { getRequestFormData } from "~/utils/get-request-form-data.server";
import { createUserSession } from "~/utils/session.server";
import { parseSearchParams } from "~/utils/url-search-params";

/**
 * Asynchronously handles the login process by processing the incoming request,
 * validating user credentials, and redirecting to the appropriate page based on user status.
 *
 * It extracts form data from the request, attempts to log in with the provided credentials,
 * and handles errors if the login fails. Upon successful login, it validates the received data
 * and redirects users based on their status. Specifically, if a user needs to change
 * their password, they will be redirected to a change password page; otherwise,
 * they will be redirected to the dashboard.
 *
 * @param {Request} request - The HTTP request containing login form data.
 * @throws Will throw an error if login fails or data validation is unsuccessful.
 * @returns  - A promise that resolves to a response indicating the redirection.
 */
export const handleLogin = async (request: Request) => {
    const formData = await getRequestFormData<LoginFormType>(request);
 
    const [error, data] = await login(formData);
    
    if (error) return formError(error);

    const { data: validatedData } =
        validateApiResponse<AuthUserSchemaWithRoleType>(
            data,
            AuthUserSchemaWithRoleSchema
        );


    // if (validatedData.isFirstTime) {
    //     return redirect(`/change-password?token=${validatedData.token}`);
    // }

    const { redirectTo = "/portal" } = parseSearchParams<{
        redirectTo?: string;
    }>(request.url);


    return createUserSession(validatedData, redirectTo);
};
