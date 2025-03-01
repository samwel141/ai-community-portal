import AvatarCard from "app/components/avatar/avatar-card";
import { FC, ReactNode } from "react";
import { cn } from "~/utils";

interface SliderOverHeaderProps {
    children: ReactNode;
    className?: string;
}

export const SliderOverHeader: FC<SliderOverHeaderProps> = ({
    children,
    className,
}) => {
    return (
        <div
            className={cn(
                "items-between mx-4 flex  border-b border-westar/50 py-3",
                className
            )}
        >
            {children}
        </div>
    );
};

export const SliderOverTitle: FC<{ title: string; subtitle?: string }> = ({
    title,
    subtitle,
}) => {
    return (
        <AvatarCard
            wrapperClassName={"gap-4 items-start"}
            className={"mt-0.5 border bg-transparent text-dark"}
            titleClassName={"text-base font-medium text-primary-950 pb-1"}
            title={title}
            swap
            subtitle={subtitle}
            subtitleClassName={"text-dark-green  "}
        />
    );
};

export const SliderOverActions: FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className }) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            {children}
        </div>
    );
};
