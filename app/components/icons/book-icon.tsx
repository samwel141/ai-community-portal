import { FC } from "react";
import { IconProps } from "~/types";

export const BookIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
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
                d="M17.0769 13.4768H5.3846C4.02513 13.4768 2.92307 14.5789 2.92307 15.9384M17.0769 13.4768V17.1691C17.0769 17.8489 16.5259 18.3999 15.8461 18.3999H5.3846C4.02513 18.3999 2.92307 17.2978 2.92307 15.9384M17.0769 13.4768V3.63067C17.0769 2.95094 16.5259 2.3999 15.8461 2.3999H6.92307M2.92307 15.9384V4.86144C2.92307 3.50197 4.02513 2.3999 5.3846 2.3999H6.92307M10.0478 6.09221H13.4231M10.0478 9.78452H13.4231M6.92307 13.3999V2.3999"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
