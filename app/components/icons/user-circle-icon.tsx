import { FC } from "react";
import { IconProps } from "~/types";

export const UserCircleIcon: FC<IconProps> = ({
    className,
    strokeWidth = 2,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                d="M5.40002 19.2004C5.86119 18.6839 8.02107 16.3071 8.65403 16.3071H15.3464C16.2636 16.3071 18.136 18.2773 18.6 18.9718M21.6 12.0004C21.6 17.3023 17.302 21.6004 12 21.6004C6.69809 21.6004 2.40002 17.3023 2.40002 12.0004C2.40002 6.69846 6.69809 2.40039 12 2.40039C17.302 2.40039 21.6 6.69846 21.6 12.0004ZM15.4389 8.72835C15.4389 6.89684 13.8927 5.40039 12.0003 5.40039C10.1079 5.40039 8.56176 6.89684 8.56176 8.72835C8.56176 10.5599 10.1079 12.0563 12.0003 12.0563C13.8927 12.0563 15.4389 10.5599 15.4389 8.72835Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};
