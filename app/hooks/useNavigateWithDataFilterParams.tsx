import { Link, LinkProps, useNavigate } from "@remix-run/react";
import { forwardRef } from "react";
import useSearchParamsState from "~/hooks/useSearchParamsState";
import { generateURLSearchParams } from "~/utils/url-search-params";

export interface NavigateOptions {
    replace?: boolean;
    state?: object;
    preventScrollReset?: boolean;
    unstable_flushSync?: boolean;
    unstable_viewTransition?: boolean;
}

const useGeneratePathnameWithDataFilterParams = () => {
    const [searchParams] = useSearchParamsState<{ page: number; q: string }>();
    return (to: string) => {
        const urlSearchParams = generateURLSearchParams(searchParams);
        return `${to}?${urlSearchParams}`;
    };
};

export const useNavigateWithDataFilterParams = () => {
    const navigate = useNavigate();
    const generatePathnameWithDataFilterParams =
        useGeneratePathnameWithDataFilterParams();

    return (to: string, options?: NavigateOptions) => {
        navigate(generatePathnameWithDataFilterParams(to), options);
    };
};

export const LinkWithDataFilterParams = forwardRef<
    HTMLAnchorElement,
    LinkProps
>(({ to, ...rest }, ref) => {
    const generatePathnameWithDataFilterParams =
        useGeneratePathnameWithDataFilterParams();

    return (
        <Link
            ref={ref}
            to={generatePathnameWithDataFilterParams(String(to))}
            {...rest}
        />
    );
});

LinkWithDataFilterParams.displayName = "LinkWithDataFilterParams";
