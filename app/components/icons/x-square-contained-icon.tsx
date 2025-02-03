import { FC } from "react";
import { IconProps } from "~/types";

export const XSquareContainedIcon: FC<IconProps> = ({
    className,
    strokeWidth = 1.5,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={className}
        >
            <path
                d="M11.6517 6.34832L9 8.99996M9 8.99996L6.34835 11.6516M9 8.99996L11.6517 11.6516M9 8.99996L6.34835 6.34832M16.5 4.31248L16.5 13.6875C16.5 15.2408 15.2408 16.5 13.6875 16.5H4.3125C2.7592 16.5 1.5 15.2408 1.5 13.6875V4.31248C1.5 2.75919 2.7592 1.5 4.3125 1.5H13.6875C15.2408 1.5 16.5 2.75919 16.5 4.31248Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};
