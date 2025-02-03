import { Link, LinkProps, useResolvedPath } from "@remix-run/react";
import { forwardRef, Fragment } from "react";
import { generateButtonClasses } from "~/components/button/common";
import { LoadingCircle } from "~/components/icons";
import { useNavigationState } from "~/hooks/useNavigationState";

interface ButtonLink extends LinkProps {
    outline?: boolean;
    loading?: boolean;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLink>(
    (props, ref) => {
        const { className, outline, children, loading, to, ...rest } = props;

        const { isLoading, headingLocation } = useNavigationState();
        const { pathname } = useResolvedPath(to);

        const isNavigating = isLoading && headingLocation === pathname;

        return (
            <Link
                to={to}
                ref={ref}
                {...rest}
                className={generateButtonClasses({ className, outline })}
            >
                {loading || isNavigating ? (
                    <Fragment>
                        <LoadingCircle className={"size-4"} />

                        <span
                            className={"pl-1 whitespace-nowrap tracking-wide"}
                        >
                            Please wait...
                        </span>
                    </Fragment>
                ) : (
                    children
                )}
            </Link>
        );
    }
);

ButtonLink.displayName = "ButtonLink";
