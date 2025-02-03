import { FC } from "react";
import { IconProps } from "~/types";

export const UploadIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
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
                d="M3.3335 12.6703V15.7437C3.3335 16.2095 3.50909 16.6562 3.82165 16.9856C4.13421 17.315 4.55814 17.5 5.00016 17.5H15.0002C15.4422 17.5 15.8661 17.315 16.1787 16.9856C16.4912 16.6562 16.6668 16.2095 16.6668 15.7437V12.6703M10.0008 12.4521L10.0008 2.5M10.0008 2.5L6.19126 6.30265M10.0008 2.5L13.8103 6.30265"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
