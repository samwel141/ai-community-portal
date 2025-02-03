import {
    hasAttribute,
    hasPermission,
    hasRole,
    UserAttribute,
} from "~/providers/access-control/access-control-helpers";
import { useAccessControl } from "~/providers/access-control/access-control-provider";

export interface UserAccessControl {
    roles?: string[];
    permissions?: string[];
    attributes?: UserAttribute;
}

/**
 * Custom hook to determine if the user has the specified roles, permissions, or attributes.
 *
 * @param {Object} props - The properties object.
 * @param {string[]} [props.roles=[]] - The roles to check against the user's roles.
 * @param {string[]} [props.permissions=[]] - The permissions to check against the user's permissions.
 * @param {UserAttribute} [props.attributes={}] - The attributes to check against the user's attributes.
 * @returns {boolean} - Returns true if the user has the required access, false otherwise.
 */
export const useHasAccess = ({
    roles = [],
    permissions = [],
    attributes = {},
}: UserAccessControl): boolean => {
    const { userRoles, userPermissions, userAttributes } = useAccessControl();

    return (
        (roles.length === 0 || hasRole(userRoles, roles)) &&
        (permissions.length === 0 ||
            hasPermission(userPermissions, permissions)) &&
        (Object.keys(attributes).length === 0 ||
            hasAttribute(userAttributes, attributes))
    );
};
