import { FC } from "react";
import { IconProps } from "~/types";

export const TrendingUpIcon: FC<IconProps> = ({
    className,
    strokeWidth = 1.5,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={className}
        >
            <path
                d="M1.99963 2V18H17.9996M5.99963 12.0001L9.49963 8.5001L11.9996 11.0001L17.4996 5.50011M13.7577 5H18.0004V9.24264"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
