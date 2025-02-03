import { FC } from "react";
import { IconProps } from "~/types";

export const PlusIcon: FC<IconProps> = ({ className, strokeWidth = 1.6 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                d="M12 4.80005L12 19.2M19.2 12L4.79999 12"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};
