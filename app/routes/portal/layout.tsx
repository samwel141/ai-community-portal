import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import  GeneralErrorBoundary  from "~/components/error-boundary";
import { useCurrentRoute } from "~/hooks/useCurrentRoute";
import { useOfflineCheck } from "~/hooks/useOfflineCheck";
import { AuthLayout } from "~/routes/portal/layout_";
import {requireUser} from "~/utils/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const authUser = await requireUser(request);

    return { authUser };
};

const PortalLayout = () => {
    const { authUser } = useLoaderData<typeof loader>();
    console.log(["Check user"], authUser)
    useOfflineCheck({
        disabled: true,
    });

    return (
        authUser ? (
            <AuthLayout authUser={authUser}>
                <Outlet />
            </AuthLayout>
        ) : (
            <AuthLayout>
                <Outlet />
            </AuthLayout>
        )
    );

};
export default PortalLayout;

export const ErrorBoundary = () => {
    // const { id: currentRouteId } = useCurrentRoute();
    // const loaderData = useRouteLoaderData<typeof loader>(currentRouteId);

    return (
        <AuthLayout
        >
            <GeneralErrorBoundary />
        </AuthLayout>
    );
};





