import { AuthUserSchemaWithRoleType } from "~/api/login/auth-user-schema";
import { UserAttribute } from "~/providers/access-control/access-control-helpers";
import { AccessControlConfig } from "~/providers/access-control/access-control-provider";
import { SexType } from "~/utils/zod-common";

/**
 * Generates the access control configuration for a user based on their roles and permissions.
 *
 * @param {Omit<AuthUserType, "token">} authUser - The authenticated user's information without the token.
 * @returns {AccessControlConfig} The user's access control configuration, which includes roles, permissions, and attributes.
 */
export const generateUserAccessControlConfig = (
    authUser?: AuthUserSchemaWithRoleType["data"] |  null
): AccessControlConfig => {
    const userRoles = authUser
        ? authUser.role.map((role) => role.name.toLowerCase())
        : [];

    const userAttributes: UserAttribute = {
        sex: authUser?.sex as SexType,
    };

    const userPermissions = authUser
        ? authUser.role.flatMap((role) =>
              role.permissions.map((permission) => permission.toLowerCase())
          )
        : [];

    return {
        userAttributes,
        userPermissions,
        userRoles,
    };
};
