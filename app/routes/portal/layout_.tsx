import { FC, ReactNode } from "react";
import { AuthUserSchemaWithRoleType } from "~/api/login/auth-user-schema";
import { AccessControlProvider } from "~/providers/access-control/access-control-provider";
import { generateUserAccessControlConfig } from "~/providers/access-control/generate-user-access-control-config";
import AppProvider from "~/providers/app-provider";
import Sidebar from "~/routes/portal/layouts/sidebar";
import TopHeader from "~/routes/portal/layouts/top-header";
import Footer from "./layouts/footer";

export const AuthLayout: FC<{
    children: ReactNode;
    authUser?: AuthUserSchemaWithRoleType["data"];
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
                        <section className={"h-full bg-[#232531] flex-1 overflow-y-auto "}>
                            {children}
                        </section>
                        <Footer/>
                    </section>
                </section>
            </AccessControlProvider>
        </AppProvider>
    );
};
