import { FC } from "react";
import Button from "~/components/button/button";
import { ButtonIconProps } from "~/components/button/common";

import { cn } from "~/utils";

const ButtonIcon: FC<ButtonIconProps> = ({
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
            className={cn(
                "center focus: size-7 bg-transparent p-0 text-muted hover:bg-black/10 focus:ring-gray-300 active:ring-black/10",
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
export default ButtonIcon;
