import type { FC } from "react";
import SkeletonLoader from "~/components/skeleton-loader";
import { cn } from "~/utils";

export const ModalFooterLoader: FC<{ className?: string }> = ({
    className,
}) => {
    return (
        <footer
            className={cn(
                "flex items-center  justify-end gap-5 px-6 pt-8",
                className
            )}
        >
            <SkeletonLoader
                className={"h-9 w-[6.9rem] bg-primary-200/90 rounded-full py-0"}
            />
            <SkeletonLoader
                className={"h-9 w-24 bg-primary-200/90 rounded-full py-0"}
            />
        </footer>
    );
};
