import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import  GeneralErrorBoundary  from "~/components/error-boundary";
import { useCurrentRoute } from "~/hooks/useCurrentRoute";
import { useOfflineCheck } from "~/hooks/useOfflineCheck";
import { AuthLayout } from "~/routes/portal/layout_";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    // const authUser = await requireUser(request);
    const authUser: {
        id: string;
        fullName: string;
        emailAddress: string;
        token: string;
        role: {
            name: string;
            permissions: string[];
        }[];
        avatar?: string | undefined;
        sex?: "Male" | "Female" | undefined;
    } = {
        id: "1",
        fullName: "John Doe",
        emailAddress: "V7P0w@example.com",
        token: "token",
        role: [
            {
                name: "Admin",
                permissions: ["create", "read", "update", "delete"],
            },
        ],
        avatar: "avatar",
        sex: "Male",
    };


    return { authUser };
};

const PortalLayout = () => {
    const { authUser } = useLoaderData<typeof loader>();
    useOfflineCheck({
        disabled: true,
    });

    return (
        <AuthLayout >
          <Outlet />
       </AuthLayout> 
    );
};
export default PortalLayout;

export const ErrorBoundary = () => {
    const { id: currentRouteId } = useCurrentRoute();
    const loaderData = useRouteLoaderData<typeof loader>(currentRouteId);

    return (
        <AuthLayout
            authUser={loaderData?.authUser}
        >
            <GeneralErrorBoundary />
        </AuthLayout>
    );
};
