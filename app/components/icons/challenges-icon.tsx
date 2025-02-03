import { FC } from "react";
import { IconProps } from "~/types";

export const ChallengesIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
    return (
        <svg
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth={strokeWidth}
        >
        <path d="M12 4L5 7L12 10L19 7L12 4Z" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.02545 10.0449L4.60608 11.0818C4.2384 11.2394 4 11.6009 4 12.0009C4 12.401 4.2384 12.7625 4.60608 12.9201L11.6061 15.9201C11.8576 16.0279 12.1424 16.0279 12.3939 15.9201L19.3939 12.9201C19.7616 12.7625 20 12.401 20 12.0009C20 11.6009 19.7616 11.2394 19.3939 11.0818L16.9746 10.0449L14.436 11.1329L16.4614 12.0009L12 13.913L7.53859 12.0009L9.56404 11.1329L7.02545 10.0449Z" fill="#CED0DC"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.02545 15.0449L4.60608 16.0818C4.2384 16.2394 4 16.6009 4 17.0009C4 17.401 4.2384 17.7625 4.60608 17.9201L11.6061 20.9201C11.8576 21.0279 12.1424 21.0279 12.3939 20.9201L19.3939 17.9201C19.7616 17.7625 20 17.401 20 17.0009C20 16.6009 19.7616 16.2394 19.3939 16.0818L16.9746 15.0449L14.436 16.1329L16.4614 17.0009L12 18.913L7.53859 17.0009L9.56404 16.1329L7.02545 15.0449Z" fill="#CED0DC"/>
        </svg>
    );
};

