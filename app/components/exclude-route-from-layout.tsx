import { Outlet, useMatches } from "@remix-run/react";
import { FC } from "react";

interface Props {
    route: string | string[];
    layout: FC;
    debug?: boolean;
}

const ExcludeRouteFromLayout: FC<Props> = ({
    route,
    layout: LayoutComponent,
    debug,
}) => {
    const matches = useMatches();

    const leaf = matches.at(-1);
    const hasNestedRoute = Array.isArray(route)
        ? route.some((r) => leaf?.id.includes(r))
        : leaf?.id.includes(route);

    if (debug) {
        console.clear();
        console.log("[leaf]", leaf);
        console.log("[route]", route);
        console.log("[hasNextedRoute]", hasNestedRoute);
    }

    return hasNestedRoute ? <Outlet /> : <LayoutComponent />;
};
export default ExcludeRouteFromLayout;
