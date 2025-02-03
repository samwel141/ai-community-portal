import { FC } from "react";
import { IconProps } from "~/types";

export const InventoryIcon: FC<IconProps> = ({
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
                d="M17.0333 7.05827H2.96671M12.0833 10.1833C10.3544 10.1833 7.91666 10.1833 7.91666 10.1833M17.0833 7.47631V15.9124C17.0833 16.8904 16.2905 17.6833 15.3125 17.6833H4.68749C3.70949 17.6833 2.91666 16.8904 2.91666 15.9124V7.47631C2.91666 7.20139 2.98066 6.93025 3.10361 6.68436L4.32041 4.25077C4.54538 3.80082 5.00526 3.5166 5.50832 3.5166H14.4917C14.9947 3.5166 15.4546 3.80082 15.6796 4.25077L16.8964 6.68436C17.0193 6.93025 17.0833 7.20139 17.0833 7.47631Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
