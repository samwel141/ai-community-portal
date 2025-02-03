import { FC, ReactNode } from "react";
import {
    hasAttribute,
    hasPermission,
    hasRole,
} from "~/providers/access-control/access-control-helpers";
import { useAccessControl } from "~/providers/access-control/access-control-provider";
import { UserAccessControl } from "~/providers/access-control/use-has-access";

interface Props extends UserAccessControl {
    children: ReactNode;
    fallback?: ReactNode;
}

const AccessControl: FC<Props> = ({
    roles = [],
    permissions = [],
    attributes = {},
    children,
    fallback = null,
}) => {
    const {
        userRoles: userRoles,
        userPermissions: userPermissions,
        userAttributes: userAttributes,
    } = useAccessControl();

    const isAuthorized =
        (roles.length === 0 || hasRole(userRoles, roles)) &&
        (permissions.length === 0 ||
            hasPermission(userPermissions, permissions)) &&
        (Object.keys(attributes).length === 0 ||
            hasAttribute(userAttributes, attributes));

    return isAuthorized ? children : fallback;
};

export default AccessControl;
