import { json, LoaderFunctionArgs } from "@remix-run/node";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";
import { getToast } from "remix-toast";
import  GeneralErrorBoundary  from "~/components/error-boundary";
import Notify from "~/components/notify";
import OverlayNotificationPanel from "~/components/overlay-notification-panel";
import AlertProvider from "~/providers/alert";

import sonnerStyles from "~/styles/sonner.css?url";
import stylesheet from "~/styles/tailwind.css?url";

export const links = () => [
    { rel: "stylesheet", href: stylesheet },
    { rel: "stylesheet", href: sonnerStyles },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { toast, headers } = await getToast(request);
    return json(
        {
            toast,
        },
        { headers }
    );
};

export function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <AlertProvider>
            <OverlayNotificationPanel />
            <Notify />
            <Outlet />
        </AlertProvider>
    );
}

export const ErrorBoundary = () => <GeneralErrorBoundary />;
