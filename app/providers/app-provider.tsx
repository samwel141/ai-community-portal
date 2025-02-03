import { createContext, FC, ReactNode, useContext } from "react";
import { AuthUserSchemaWithRoleType } from "~/api/login/auth-user-schema";
import { CacheProvider } from "~/utils/cache/components";

interface AppContextType {
    authUser?: AuthUserSchemaWithRoleType["data"] | undefined;
}

export interface AppContextProps extends AppContextType {
    children: ReactNode;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp should be used inside AppProvider ");
    return context;
};

/**
 *  Retrieves the current organization's currency label from the authenticated user.
 *
 *  @return  The current organization's currency.
 */

const AppProvider: FC<AppContextProps> = ({
    authUser,
    children,
}) => {
    return (
        <AppContext.Provider value={{ authUser }}>
            <CacheProvider>{children}</CacheProvider>
        </AppContext.Provider>
    );
};

export default AppProvider;
