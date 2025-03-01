import { FC, ReactNode } from "react";
import { cn } from "~/utils";

export const SlideOverFooter: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className }) => {
    return (
        <footer className={cn("px-5 pt-5 pb-2.5 bg-gray-700", className)}>
            {children}
        </footer>
    );
};
