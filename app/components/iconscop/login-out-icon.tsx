import { FC } from "react";
import { IconProps } from "~/types";

export const LoginOutIcon: FC<IconProps> = ({
    className,
    strokeWidth = 1.5,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className={className}
        >
            <path
                d="M5.85345 2.40039H3.38286C3.00844 2.40039 2.64935 2.54789 2.3846 2.81044C2.11984 3.07299 1.9711 3.42909 1.9711 3.80039V12.2004C1.9711 12.5717 2.11984 12.9278 2.3846 13.1903C2.64935 13.4529 3.00844 13.6004 3.38286 13.6004H5.85345M6.02891 8.00039H14.0289M14.0289 8.00039L10.9721 4.80039M14.0289 8.00039L10.9721 11.2004"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
