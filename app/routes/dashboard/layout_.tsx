import { FC, ReactNode } from "react";
import { AuthUserSchemaWithRoleType } from "~/api/login/auth-user-schema";
import { AccessControlProvider } from "~/providers/access-control/access-control-provider";
import { generateUserAccessControlConfig } from "~/providers/access-control/generate-user-access-control-config";
import AppProvider from "~/providers/app-provider";
import Footer from "./layouts/footer";
import Sidebar from "./layouts/sidebar";
import TopHeader from "./layouts/top-header";

export const AuthLayout: FC<{
    children: ReactNode;
    authUser?: AuthUserSchemaWithRoleType["data"] | null;
}> = ({ children, authUser }) => {
    const accessControlConfig = generateUserAccessControlConfig(authUser);

    return (
        <AppProvider authUser={authUser}>
            <AccessControlProvider accessControlConfig={accessControlConfig}>
                <section
                    className={
                        "relative flex h-screen overflow-hidden bg-white"
                    }
                >
                    <Sidebar />
                    <section
                        className={
                            "flex flex-col h-full flex-1 overflow-hidden"
                        }
                    >
                        <TopHeader />
                        <section className="h-full bg-[rgb(40,40,39)] flex-1 overflow-y-auto px-4 py-6 space-y-4">
                            {children}
                        </section>
                        <Footer />
                    </section>
                </section>
            </AccessControlProvider>
        </AppProvider>
    );
};
