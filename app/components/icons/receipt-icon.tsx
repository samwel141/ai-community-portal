import { FC } from "react";
import { IconProps } from "~/types";

export const ReceiptIcon: FC<IconProps> = ({
    className,
    strokeWidth = 1.5,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            className={className}
        >
            <path
                d="M5.84999 6.00479H12.15M5.84999 9.60478H12.15M4.31999 2.40479H13.68C14.3262 2.40479 14.85 3.0092 14.85 3.75479V15.9048L12.9 14.5548L10.95 15.9048L8.99999 14.5548L7.04999 15.9048L5.09999 14.5548L3.14999 15.9048V3.75478C3.14999 3.0092 3.67382 2.40479 4.31999 2.40479Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
