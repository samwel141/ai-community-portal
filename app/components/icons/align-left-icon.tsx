import { FC } from "react";
import { IconProps } from "~/types";

export const AlignLeftIcon: FC<IconProps> = ({
    className,
    strokeWidth = 1.5,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={className}
        >
            <path
                d="M1.6 2.40039L14.4 2.40039M1.6 5.86706L11.0161 5.86706M1.6 9.33372L14.4 9.33372M1.6 12.8004L8.44137 12.8004"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
