import { FC } from "react";
import { IconProps } from "~/types";

export const DataErrorIcon: FC<IconProps> = ({
    className,
    strokeWidth = 2.5,
}) => {
    return (
        <svg
            width="32"
            height="36"
            viewBox="0 0 32 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M16 33.9247H5.99998C3.79084 33.9247 1.99999 32.1339 2 29.9247L2.00015 5.92481C2.00017 3.71568 3.79103 1.92484 6.00015 1.92484H24.0006C26.2097 1.92484 28.0006 3.7157 28.0006 5.92483V12.9248M22.0006 24.6875C22.0006 22.5263 23.7915 20.7744 26.0006 20.7744C28.2098 20.7744 30.0006 22.5263 30.0006 24.6875C30.0006 26.8486 28.2098 28.6006 26.0006 28.6006M26.0006 34.0751V33.9247M9.00062 9.92483H21.0006M9.00062 15.9248H21.0006M9.00062 21.9248H15.0006"
                stroke="#806C6C"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
