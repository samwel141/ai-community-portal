import { FC } from "react";
import { IconProps } from "~/types";

export const BarChartIcon: FC<IconProps> = ({
    className,
    strokeWidth = 1.5,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            className={className}
        >
            <path
                d="M14 14.5999V9.59985M10 14.5999V6.59985M6 14.5999V12.5999M4 18.5999C2.89543 18.5999 2 17.7044 2 16.5999V4.59985C2 3.49528 2.89543 2.59985 4 2.59985H16C17.1046 2.59985 18 3.49528 18 4.59985V16.5999C18 17.7044 17.1046 18.5999 16 18.5999H4Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
