import { FC } from "react";
import { IconProps } from "~/types";

export const PaymentIcon: FC<IconProps> = ({
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
                d="M11.7501 15.8827H3.7504C2.64585 15.8827 1.75043 14.9873 1.7504 13.8827L1.75018 6.38287C1.75015 5.27828 2.64559 4.38281 3.75018 4.38281H15.7497C16.8543 4.38281 17.7498 5.27773 17.7498 6.38233L17.7498 9.88281M2.2498 7.88269H17.2498M14.2498 13.9182L16.295 11.8827M16.295 11.8827L18.2498 13.8262M16.295 11.8827L16.295 16.4182"
                stroke={"currentColor"}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
