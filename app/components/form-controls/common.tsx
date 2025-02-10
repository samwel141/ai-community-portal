import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import type { FC, HTMLAttributes } from "react";
import { cn } from "~/utils";

export const FieldContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
}) => <div className={cn("w-full space-y-1.5", className)}>{children}</div>;

export const ErrorMessage: FC<{ message?: string }> = ({ message }) => (
    <p className="text-xs text-red-500">{message}</p>
);

export const ErrorIcon = () => {
    return (
        <ExclamationCircleIcon
            className={
                "pointer-events-none absolute bottom-0 right-2 top-0 my-auto h-5 w-5 text-red-500"
            }
        />
    );
};

export const inputClassNames = `
    spin-button-none w-full bg-transparent text-gray-900
    overflow-hidden border border-gray-400 p-0
     shadow-sm 
    placeholder:text-xs placeholder:font-light placeholder:text-gray-400 
    focus:border-gray-400
    focus:outline-none focus:ring-gray-400 disabled:bg-gray-100 sm:text-sm
    sm:leading-6 py-1 md:text-xs lg:py-2 xl:text-base 2xl:ring-4
                `;
