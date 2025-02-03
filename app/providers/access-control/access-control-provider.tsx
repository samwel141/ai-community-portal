import { createContext, FC, ReactNode, useContext } from "react";
import { UserAttribute } from "~/providers/access-control/access-control-helpers";

export interface AccessControlConfig {
    userPermissions: string[];
    userAttributes: UserAttribute;
    userRoles: string[];
}

const AccessControlContext = createContext<AccessControlConfig | null>(null);

export const AccessControlProvider: FC<{
    accessControlConfig: AccessControlConfig;
    children: ReactNode;
}> = ({ accessControlConfig, children }) => {
    return (
        <AccessControlContext.Provider value={accessControlConfig}>
            {children}
        </AccessControlContext.Provider>
    );
};

/**
 * Custom hook to access the AccessControlContext.
 *
 * @throws Will throw an error if used outside of an AccessControlProvider.
 * @returns {AccessControlConfig} - The access control configuration.
 */
export const useAccessControl = () => {
    const context = useContext(AccessControlContext);
    if (!context)
        throw new Error(
            "useAccessControl should be used inside AccessControlProvider"
        );
    return context;
};
