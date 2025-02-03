import { FC } from "react";
import { AvatarCardProps } from "~/components/avatar/avatar-card";
import SkeletonLoader from "~/components/skeleton-loader";
import { cn } from "~/utils";

interface AvatarCardLoadingProps
    extends Omit<AvatarCardProps, "title" | "subtitle" | "Icon" | "imageUrl"> {
    wrapperClassName?: string;
}

export const AvatarCardLoading: FC<AvatarCardLoadingProps> = ({
    titleClassName,
    subtitleClassName,
    className,
    wrapperClassName,
    center,
}) => {
    return (
        <div
            className={cn(
                "flex items-center gap-2.5",
                { "flex-col gap-y-4 text-center": center },
                wrapperClassName
            )}
        >
            <SkeletonLoader
                className={cn("size-10 rounded-full p-0 ", className)}
            />
            <div className={cn("space-y-2", { "center flex-col": center })}>
                <SkeletonLoader className={cn("w-32 py-2", titleClassName)} />
                <SkeletonLoader
                    className={cn("w-36 py-1.5", subtitleClassName, {
                        "w-20": center,
                    })}
                />
            </div>
        </div>
    );
};
