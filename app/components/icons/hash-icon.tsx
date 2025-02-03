import { FC } from "react";
import { IconProps } from "~/types";

export const HashIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M16.6673 13.3335H3.33398M16.6673 6.66683H3.33398M5.55621 16.6668L7.77843 3.3335M12.2229 16.6668L14.4451 3.3335"
                stroke="#8A8F7F"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};
