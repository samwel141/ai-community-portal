import type { FC, ReactNode } from "react";
import { cn } from "~/utils";

export const ModalContent: FC<{ children: ReactNode; className?: string }> = ({
    children,
    className,
}) => {
    return <div className={cn(" flex-1  px-4", className)}>{children}</div>;
};
