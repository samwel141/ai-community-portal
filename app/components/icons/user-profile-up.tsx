import { FC } from "react";
import { IconProps } from "~/types";

export const UserProfileUp: FC<IconProps> = ({
    className,
    strokeWidth = 2,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            className={className}
            strokeWidth={strokeWidth}
        >
            <path
                d="M2.73315 21.6L2.73356 17.9996C2.73378 16.0115 4.34549 14.4 6.33356 14.4H12.9332M17.1332 11.2714L19.5332 8.69999M19.5332 8.69999L21.9332 11.2714M19.5332 8.69999V15.3M14.7332 5.99999C14.7332 7.98822 13.1214 9.59999 11.1332 9.59999C9.14493 9.59999 7.53315 7.98822 7.53315 5.99999C7.53315 4.01177 9.14493 2.39999 11.1332 2.39999C13.1214 2.39999 14.7332 4.01177 14.7332 5.99999Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
