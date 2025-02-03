import { FC } from "react";
import { IconProps } from "~/types";

export const TimeIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
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
                d="M8.99998 7.2V9.45M8.99998 9.45V11.7M8.99998 9.45H11.25M8.99998 9.45H6.74998M4.39198 14.184L2.37598 16.2M15.624 16.2L13.608 14.184M3.59998 1.8L1.34998 4.05M16.65 4.05L14.4 1.8M15.336 9.576C15.336 13.0753 12.4993 15.912 8.99998 15.912C5.5007 15.912 2.66398 13.0753 2.66398 9.576C2.66398 6.07672 5.5007 3.24 8.99998 3.24C12.4993 3.24 15.336 6.07672 15.336 9.576Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};
