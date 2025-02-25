import { FC, HTMLAttributes, ReactNode } from "react";
import { type BadgeType } from "~/types";
import { cn } from "~/utils";

export interface IBadge extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    type?: BadgeType;
    hideDotIndicator?: boolean;
}

const Badge: FC<IBadge> = ({
    type = "success",
    children,
    className,
    ...rest
}) => {
    const getColorTheme = () => {
        switch (type) {
            case "disabled": {
                return "inline-flex items-center bg-[#F3F4F6] px-2 py-1 text-xs  text-gray-600 ring-0 ring-inset ring-gray-600/20";
            }
            case "warning": {
                return "inline-flex items-center bg-yellow-50 px-2 py-1 text-xs  text-yellow-800 ring-0 ring-inset ring-yellow-600/20";
            }
            case "danger": {
                return "inline-flex items-center bg-[#FFE5E5] px-2 py-1 text-xs  text-red-600 ring-0 ring-inset ring-rose-600/10";
            }
            case "success": {
                return "inline-flex  items-center bg-[#D9FFE8] px-2 py-1 text-xs  text-green-600 ring-0 ring-inset ring-green-600/20";
            }
            case "info": {
                return " inline-flex inline-flex items-center bg-[#E6F0FF] px-2 py-1 text-xs  text-blue-600 ring-0 ring-inset ring-blue-600/20";
            }
            default: {
                return "inline-flex  items-center bg-primary-50 px-2 py-1 text-xs  text-primary-600 ring-0 ring-inset ring-primary-600/10";
            }
        }
    };
    return (
        <div
            className={cn(
                `flex gap-1  rounded-lg tracking-wide ${getColorTheme()}`,
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
};
export default Badge;
