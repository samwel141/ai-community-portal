import { FC } from "react";
import { IconProps } from "~/types";

export const UserProfileRightIcon: FC<IconProps> = ({
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
                d="M2 18L2.00034 14.9997C2.00052 13.3429 3.34361 12 5.00034 12H10M15.8571 11.25L18 13.25M18 13.25L15.8571 15.25M18 13.25H12.5M14.5 2C15.7135 2.68023 16.5 3.77073 16.5 5C16.5 6.22927 15.7135 7.31977 14.5 8M12 5C12 6.65685 10.6569 8 9 8C7.34314 8 6 6.65685 6 5C6 3.34315 7.34314 2 9 2C10.6569 2 12 3.34315 12 5Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
