import { AuthUserSchemaWithRoleType } from "~/api/login/auth-user-schema";

/**
 * Checks if the user has any of the required roles.
 *
 * @param {string[]} userRoles - The roles assigned to the user.
 * @param {string[]} requiredRoles - The roles to check against.
 * @returns {boolean} - True if the user has any of the required roles, false otherwise.
 */
export const hasRole = (userRoles: string[], requiredRoles: string[]) => {
    return requiredRoles.some((role) => userRoles.includes(role));
};

/**
 * Checks if the user has any of the required permissions.
 *
 * @param {string[]} userPermissions - The permissions assigned to the user.
 * @param {string[]} requiredPermissions - The permissions to check against.
 * @returns {boolean} - True if the user has any of the required permissions, false otherwise.
 */
export const hasPermission = (
    userPermissions: string[],
    requiredPermissions: string[]
): boolean => {
    return requiredPermissions.some((permission) =>
        userPermissions.includes(permission)
    );
};

/**
 * Represents user attributes as a record with generic key and value types.
 */
export type UserAttribute = Partial<
    Omit<AuthUserSchemaWithRoleType["data"], "role" | "token" | "id">
> &
    Record<string, boolean | number | string>;

/**
 * Checks if the user has the specified attributes.
 *
 * @param {UserAttribute} userAttributes - The attributes assigned to the user.
 * @param {UserAttribute} requiredAttributes - The attributes to check against.
 * @returns {boolean} - True if the user has all the required attributes, false otherwise.
 */
export const hasAttribute = (
    userAttributes: UserAttribute,
    requiredAttributes: UserAttribute
): boolean => {
    return Object.keys(requiredAttributes).every(
        (key) => userAttributes[key] === requiredAttributes[key]
    );
};
