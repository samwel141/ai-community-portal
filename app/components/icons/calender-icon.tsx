import { FC } from "react";
import { IconProps } from "~/types";

export const CalenderIcon: FC<IconProps> = ({
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
                d="M6.45833 14.3501V14.2857M10.2083 14.3501V14.2857M10.2083 10.8571V10.7927M13.5417 10.8571V10.7927M3.95833 7.42855H15.625M5.46627 2.5V3.78586M13.9583 2.5V3.78571M13.9583 3.78571H5.625C4.24429 3.78571 3.125 4.93697 3.125 6.35712V14.9286C3.125 16.3487 4.24429 17.5 5.625 17.5H13.9583C15.339 17.5 16.4583 16.3487 16.4583 14.9286L16.4583 6.35712C16.4583 4.93697 15.339 3.78571 13.9583 3.78571Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
