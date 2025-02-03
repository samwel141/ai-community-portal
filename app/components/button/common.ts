import type { ButtonHTMLAttributes, MouseEventHandler } from "react";
import type { IconType } from "~/types";
import { cn } from "~/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
    loading?: boolean;
    loadingText?: string;
    loadingIconClassName?: string;
}

export interface ButtonIconProps extends ButtonProps {
    Icon: IconType;
    iconClassName?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    iconStrokeWidth?: string | number | undefined;
}

export const generateButtonClasses = ({
    loading,
    outline,
    className,
}: Partial<Pick<ButtonProps, "outline" | "loading" | "className">>) => {
    return cn(
        `
        focus:ring-primary/50 active:ring-primary/50 relative rounded-full px-4 py-2 text-sm
        hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2  bg-primary text-whit w-fit
        active:ring-2 active:ring-offset-2 disabled:opacity-50 text-center bg-primary text-white center  border-primary`,
        {
            "border  border-westar text-muted bg-transparent font-medium focus:ring-primary-500/60 active:ring-primary-500/60":
                outline,
        },
        {
            "center flex cursor-wait items-center  opacity-80 hover:opacity-80 ":
                loading,
        },
        { "cursor-pointer opacity-100": !loading },
        className
    );
};
