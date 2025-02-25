import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import  GeneralErrorBoundary  from "~/components/error-boundary";
import { useOfflineCheck } from "~/hooks/useOfflineCheck";
import {requireUser} from "~/utils/session.server";
import { AuthLayout } from "./layout_";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const authUser = await requireUser(request);

    return { authUser };
};

const PortalLayout = () => {
    const { authUser } = useLoaderData<typeof loader>();
    useOfflineCheck({
        disabled: true,
    });

    return (
            <AuthLayout authUser={authUser}>
                <Outlet />
            </AuthLayout>
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





