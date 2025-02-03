import { FC, MouseEventHandler } from "react";
import { Button } from "~/components/button";
import { ButtonProps } from "~/components/button/common";
import { type IconType } from "~/types";
import { cn } from "~/utils";

interface ButtonIconProps extends ButtonProps {
    Icon: IconType;
    iconClassName?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    iconStrokeWidth?: string | number | undefined;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
    className,
    Icon,
    iconClassName,
    onClick,
    iconStrokeWidth,

    ...rest
}) => {
    return (
        <Button
            {...rest}
            tabIndex={-1}
            type={"button"}
            onClick={onClick}
            loadingText={""}
            loadingIconClassName={"size-4 text-dark-green"}
            className={cn(
                "center rounded-lg focus: size-7 bg-transparent p-0 text-muted hover:bg-primary-500/20 focus:ring-gray-300 active:ring-black/10",
                className
            )}
        >
            <Icon
                className={cn("size-5", iconClassName)}
                strokeWidth={iconStrokeWidth}
            />
        </Button>
    );
};
