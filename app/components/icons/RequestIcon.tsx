import { FC } from "react";
import { IconProps } from "~/types";

export const RequestIcon: FC<IconProps> = ({
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
                d="M11.7502 16.2823H3.75046C2.64591 16.2823 1.75049 15.3869 1.75046 14.2824L1.75024 6.78253C1.75021 5.67793 2.64565 4.78247 3.75024 4.78247H15.7498C16.8544 4.78247 17.7498 5.67738 17.7498 6.78198L17.7499 10.2825M2.24986 8.28235H17.2499M18.2497 14.7823L16.2045 16.8178M16.2045 16.8178L14.2497 14.8743M16.2045 16.8178L16.2045 12.2823"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
