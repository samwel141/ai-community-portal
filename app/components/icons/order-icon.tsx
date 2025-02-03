import { FC } from "react";
import { IconProps } from "~/types";

export const OrderIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
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
                d="M18.0003 5.4499L2.00076 5.44967L1.99973 5.44995M18.0003 5.4499L17.9997 16.5466C17.9997 17.5978 17.1314 18.45 16.0603 18.45H3.93912C2.86802 18.45 1.99973 17.5978 1.99973 16.5466V5.44995M18.0003 5.4499L14.7926 2.24284C14.6051 2.05531 14.3507 1.94995 14.0855 1.94995H5.91394C5.64872 1.94995 5.39437 2.05531 5.20683 2.24284L1.99973 5.44995M12.9997 8.44995C12.9997 10.1068 11.6566 11.45 9.99972 11.45C8.34287 11.45 6.99972 10.1068 6.99972 8.44995"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
