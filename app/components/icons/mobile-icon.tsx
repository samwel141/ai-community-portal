import { FC } from "react";
import { IconProps } from "~/types";

export const MobileIcon: FC<IconProps> = ({ className, strokeWidth = 2 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            className={className}
        >
            <path
                d="M9.66655 6.00001H15.6666M5.46655 4.79999V19.2C5.46655 20.5255 6.54107 21.6 7.86655 21.6H17.4666C18.792 21.6 19.8666 20.5255 19.8666 19.2V4.80001C19.8666 3.47453 18.792 2.40001 17.4666 2.40001L7.86656 2.39999C6.54107 2.39999 5.46655 3.47451 5.46655 4.79999ZM12.6666 16.8H12.7516V16.8769H12.6666V16.8Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
