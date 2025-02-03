import { FC } from "react";
import { IconProps } from "~/types";

export const ClipboardIcon: FC<IconProps> = ({
    className,
    strokeWidth = 1.5,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            className={className}
        >
            <path
                d="M17.1667 10.9376L17.1667 5.50003C17.1667 3.84317 15.8235 2.50002 14.1666 2.50003L8.72916 2.5001M12.1667 17.5001L6.54166 17.5001C5.50613 17.5001 4.66666 16.6606 4.66666 15.6251L4.66666 7.5001C4.66666 6.46456 5.50613 5.6251 6.54166 5.6251L12.1667 5.62509C13.2022 5.62509 14.0417 6.46456 14.0417 7.50009L14.0417 15.6251C14.0417 16.6606 13.2022 17.5001 12.1667 17.5001Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};
