import { FC } from "react";
import { IconProps } from "~/types";

export const PercentIcon: FC<IconProps> = ({ className, strokeWidth = 2 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={className}
        >
            <path
                d="M14.6663 14.6663L1.33301 1.38707M5.34909 12.5523C5.34909 13.6458 4.45905 14.5322 3.36115 14.5322C2.26324 14.5322 1.3732 13.6458 1.3732 12.5523C1.3732 11.4589 2.26324 10.5725 3.36115 10.5725C4.45905 10.5725 5.34909 11.4589 5.34909 12.5523ZM14.6261 3.31289C14.6261 4.40635 13.7361 5.29277 12.6382 5.29277C11.5403 5.29277 10.6503 4.40635 10.6503 3.31289C10.6503 2.21943 11.5403 1.33301 12.6382 1.33301C13.7361 1.33301 14.6261 2.21943 14.6261 3.31289Z"
                stroke="gray"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};
