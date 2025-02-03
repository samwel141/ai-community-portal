import { FC } from "react";
import { IconProps } from "~/types";

export const XIcon: FC<IconProps> = ({ className, strokeWidth = 2 }) => {
    return (
        <svg
            className={className}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 1L1 11M11 11L1 1"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};
