import { AuthUserSchemaWithRoleType } from "~/api/login/auth-user-schema";
import {
    hasAttribute,
    hasPermission,
    hasRole,
} from "~/providers/access-control/access-control-helpers";
import { generateUserAccessControlConfig } from "~/providers/access-control/generate-user-access-control-config";
import { UserAccessControl } from "~/providers/access-control/use-has-access";
import { throwUnauthorizedError } from "~/utils/request.server";
import { requireUser } from "~/utils/session.server";

/**
 * Verifies that the requesting user has the necessary access based on roles, permissions, and attributes.
 *
 * @param {Request} request - The incoming request object.
 * @param {Object} userAccessControl - Access control requirements.
 * @param {string[]} [userAccessControl.roles=[]] - List of roles that are allowed access.
 * @param {string[]} [userAccessControl.permissions=[]] - List of permissions required for access.
 * @param {Object} [userAccessControl.attributes={}] - Additional attributes required for access.
 *
 * @returns {Promise<AuthUserType>} The authenticated user object if access is granted.
 *
 * @throws Will throw UnauthorizedError If the user doesn't have the necessary access.
 */
export const requireAccess = async (
    request: Request,
    { roles = [], permissions = [], attributes = {} }: UserAccessControl
): Promise<AuthUserSchemaWithRoleType["data"]> => {
    const authUser = await requireUser(request);

    const { userRoles, userPermissions, userAttributes } =
        generateUserAccessControlConfig(authUser);

    const hasAccess =
        (roles.length === 0 || hasRole(userRoles, roles)) &&
        (permissions.length === 0 ||
            hasPermission(userPermissions, permissions)) &&
        (Object.keys(attributes).length === 0 ||
            hasAttribute(userAttributes, attributes));

    if (!hasAccess) throwUnauthorizedError();

    return authUser;
};
