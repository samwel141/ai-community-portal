import { FC } from "react";
import { IconProps } from "~/types";

export const HomeIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
    return (
        <svg
            className={className}
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth={strokeWidth}
        >
            <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" />
        </svg>
    );
};

