import {
    hasAttribute,
    hasPermission,
    hasRole,
} from "~/providers/access-control/access-control-helpers";
import { AccessControlConfig } from "~/providers/access-control/access-control-provider";
import { UserAccessControl } from "~/providers/access-control/use-has-access";

type MenuItemConfig = {
    accessControl: UserAccessControl;
    link: string;
};

type MenuItemAccess = {
    hasAccess: boolean;
    link: string;
};

export type MenuConfig<T extends string> = Record<T, MenuItemConfig[]>;

const checkRequiredAccess = (
    accessControlConfig: AccessControlConfig,
    { roles = [], permissions = [], attributes = {} }: UserAccessControl
) => {
    const { userPermissions, userAttributes, userRoles } = accessControlConfig;

    return (
        (roles.length === 0 || hasRole(userRoles, roles)) &&
        (permissions.length === 0 ||
            hasPermission(userPermissions, permissions)) &&
        (Object.keys(attributes).length === 0 ||
            hasAttribute(userAttributes, attributes))
    );
};

/**
 * Determines the accessibility of menu items based on the user's access control configuration.
 *
 * @param {AccessControlConfig} accessControlConfig - The access control settings for the user, including permissions, attributes, and roles.
 * @param {MenuItemConfig[]} menuAccessConfigs - Array of menu item configurations that define access control requirements.
 * @returns {MenuItemAccess} - An object containing access status and the link of an accessible menu item if available.
 */
const getMenuAccess = (
    accessControlConfig: AccessControlConfig,
    menuAccessConfigs: MenuItemConfig[]
): MenuItemAccess => {
    const accessibleMenuItem = menuAccessConfigs.find(({ accessControl }) =>
        checkRequiredAccess(accessControlConfig, accessControl)
    );

    return {
        hasAccess: !!accessibleMenuItem,
        link: accessibleMenuItem ? accessibleMenuItem.link : "",
    };
};

/**
 * Generates a record of menu item access based on the provided access control and menu configurations.
 *
 * @param {AccessControlConfig} accessControlConfig - Configuration object that defines access control rules.
 * @param {MenuConfig<T>} menuConfig - Configuration object that defines the menu structure and items.
 * @returns {Record<T, MenuItemAccess>} A record where each key corresponds to a menu item and the value represents access details for that item.
 * @template T - A generic type parameter that extends string, representing the keys in the menu configuration.
 */
export const generateMenuAccess = <T extends string>(
    accessControlConfig: AccessControlConfig,
    menuConfig: MenuConfig<T>
): Record<T, MenuItemAccess> => {
    return Object.entries(menuConfig).reduce(
        (acc, [key, configs]) => {
            acc[key as T] = getMenuAccess(
                accessControlConfig,
                configs as MenuItemConfig[]
            );
            return acc;
        },
        {} as Record<T, MenuItemAccess>
    );
};
