import { FC, ReactNode } from "react";
import { cn } from "~/utils";

export const SliderOverContent: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className }) => {
    return (
        <div className={cn("h-full flex-1 overflow-y-auto  p-5", className)}>
            {children}
        </div>
    );
};
