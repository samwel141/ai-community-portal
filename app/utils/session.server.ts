import { createCookieSessionStorage } from "@remix-run/node";
import { AuthUserSchemaWithRoleType } from "~/api/login/auth-user-schema";
import { db, saveOrUpdateUser } from "~/utils/db.server";
import { env } from "~/utils/env.server";
import { safeRedirect, safeRedirectWithSuccess } from "~/utils/request.server";

/**
 * The function to create a user session with a given user ID and redirect URL
 *
 * @param authUser
 * @param redirectTo - The URL is to redirect after creating the user session
 * @param successMessage
 * @returns Resolves with a redirect response object after successfully creating the user session
 */
export async function createUserSession(
    authUser: AuthUserSchemaWithRoleType["data"],
    redirectTo: string,
    successMessage?: string
) {
    const session = await storage.getSession();

    await saveOrUpdateUser(authUser);
    session.set("userId", authUser.id);

    const message = successMessage ?? `Hi ${authUser.fullName}!, Welcome back.`;

    return safeRedirectWithSuccess(redirectTo, message, {
        headers: {
            "Set-Cookie": await storage.commitSession(session),
        },
    });
}

/**
 * Checks if a user ID is present in the session from the request.
 * If not, it will return null indicating there is no auth user
 *
 * @param request - The request containing user session information
 * @returns Resolves with the user ID if present, null otherwise
 */
export async function getUserId(request: Request) {
    const session = await getSession(request);
    const userId = session.get("userId") as string | undefined;
    if (!userId) {
        return null;
    }
    return userId;
}

/**
 * Retrieves the session object associated with the provided request.
 *
 * @param {Request} request - The request object containing the session information.
 *
 * @return The session object associated with the provided request.
 */
function getSession(request: Request) {
    return storage.getSession(request.headers.get("cookie"));
}

/**
 * Checks if a user ID is present in the request.
 * If not, it will redirect the user to the login page with a redirect parameter.
 *
 * @param request - The request object containing user information
 * @throws Will throw an error if user ID is not present
 * @returns The user ID if present
 */

export async function requireUser(
    request: Request,
    redirectTo: string = new URL(request.url).pathname
) {
    const userId = await getUserId(request);
    const user = await db.getByID(String(userId));

    if (!user || !userId) {
        const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
        throw safeRedirect(`/login?${searchParams}`);
    }
    return user;
}


/**
 * Logs out the user and destroys their session.
 *
 * @param {Request} request - The request object.
 * @return {Promise<Response>} The response object with redirect to the login page and the session destroyed.
 */
export async function logout(request: Request): Promise<Response> {
    const session = await getSession(request);
    return safeRedirect("/", {
        headers: {
            "Set-Cookie": await storage.destroySession(session),
        },
    });
}

const storage = createCookieSessionStorage({
    cookie: {
        name: "evi-admin-session",
        // secure: process.env.NODE_ENV === "production",
        secrets: [env.SESSION_SECRET],
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true,
    },
});

/**
 * Retrieves the token of the authenticated user.
 *
 * @param {Request} request - The request object representing the HTTP request made.
 * @returns {Promise<string>}` - A promise that resolves to the token of the authenticated user.
 */
export const requireToken = async (request: Request): Promise<string> => {
    const user = await requireUser(request);
    return user!.token;
};

/**
 * Update the user session with new data and redirect to a specified URL.
 * It destroys the current session, logs the updated user details to the console,
 * and creates a new session with the provided data and redirect URL.
 *
 * @param {Request} request - The request object to update the session for.
 * @param {AuthUserSchemaWithRoleType["data"]} data - The new user data to update the session with.
 * @param {string} redirectTo - The URL to redirect to after updating the session.
 *
 * @returns Resolves with the newly created user session.
 */
export const updateUserSession = async (
    request: Request,
    data: AuthUserSchemaWithRoleType["data"],
    redirectTo: string
) => {
    const session = await getSession(request);
    await storage.destroySession(session);
    return await createUserSession(
        data,
        redirectTo,
        "Session updated successfully"
    );
};

export async function requireUserOrNull(request: Request) {
    const userId = await getUserId(request);
    if (!userId) {
        return null;
    }
    return userId;
}
