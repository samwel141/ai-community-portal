import { useResolvedPath } from "@remix-run/react";
import { FC } from "react";
import ButtonIcon from "~/components/button-icon";
import { ButtonIconProps } from "~/components/button/common";
import { LoadingCircle } from "~/components/icons";
import { LinkWithDataFilterParams } from "~/hooks/useNavigateWithDataFilterParams";
import { useNavigationState } from "~/hooks/useNavigationState";

interface ButtonLinkIconProps extends ButtonIconProps {
    to: string;
    state?: object;
}

export const ButtonLinkIcon: FC<ButtonLinkIconProps> = ({
    to,
    Icon,
    state,
    ...rest
}) => {
    const { isLoading, headingLocation } = useNavigationState();
    const { pathname } = useResolvedPath(to);
    const isNavigating = isLoading && headingLocation === pathname;

    return (
        <LinkWithDataFilterParams to={to} state={state}>
            <ButtonIcon
                iconClassName={"size-5 "}
                {...rest}
                Icon={isNavigating ? LoadingCircle : Icon}
            />
        </LinkWithDataFilterParams>
    );
};
