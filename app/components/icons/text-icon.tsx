import { FC } from "react";
import { IconProps } from "~/types";

export const TextIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
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
                d="M7.00019 6.80005H13.0002M7.00019 9.80005H13.0002M7.00019 12.8H10.0002M5.49996 2.80005H14.5001C15.6047 2.80005 16.5002 3.6955 16.5001 4.80009L16.4999 16.8001C16.4999 17.9046 15.6045 18.8 14.4999 18.8L5.49987 18.8C4.3953 18.8 3.49987 17.9046 3.49988 16.8L3.49996 4.80004C3.49996 3.69547 4.39539 2.80005 5.49996 2.80005Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
