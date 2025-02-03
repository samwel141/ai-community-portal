import { FC } from "react";
import { IconProps } from "~/types";

export const Map2Icon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
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
                d="M2.69097 4.72238L15.3581 17.0889M2.69097 4.72238C3.16226 4.18433 3.86619 3.84276 4.65265 3.84276H8.93482M2.69097 4.72238C2.31192 5.15513 2.08334 5.71497 2.08334 6.32642V15.4332C2.08334 16.8049 3.23366 17.9168 4.65265 17.9168H14.0734C15.4924 17.9168 16.6427 16.8049 16.6427 15.4332V11.7077M8.93482 11.7077L3.368 17.0889M15.0048 4.89831V4.8454M17.9167 4.83712C17.9167 6.67287 15.0048 9.12053 15.0048 9.12053C15.0048 9.12053 12.0929 6.67287 12.0929 4.83712C12.0929 3.31633 13.3966 2.0835 15.0048 2.0835C16.613 2.0835 17.9167 3.31633 17.9167 4.83712Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
