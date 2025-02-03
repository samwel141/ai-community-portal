import { FC } from "react";
import { IconProps } from "~/types";

export const StarIcon: FC<IconProps> = ({ className }) => {
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
                d="M9.99984 1.66602L12.5748 6.88268L18.3332 7.72435L14.1665 11.7827L15.1498 17.516L9.99984 14.8077L4.84984 17.516L5.83317 11.7827L1.6665 7.72435L7.42484 6.88268L9.99984 1.66602Z"
                fill="currentColor"
            />
        </svg>
    );
};
