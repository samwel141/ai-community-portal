import { FC, HTMLAttributes } from "react";
import { cn } from "~/utils";

// ⚠️ Note: dont use thin use FutureAvatar instead, it will be remove on the future
export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl?: string;
    alt?: string;
    Icon?: FC<{ className?: string }>;
    className?: string;
    imageClassName?: string;
    iconClassName?: string;
}

const Avatar: FC<AvatarProps> = ({
    imageUrl,
    alt,
    className,
    Icon,
    iconClassName,
    imageClassName,
    ...rest
}) => {
    return (
        <div
            {...rest}
            className={cn(
                " center size-9 shrink-0 text-primary-500 overflow-hidden rounded-full bg-surface-container ",
                className
            )}
        >
            {imageUrl ? (
                <img
                    className={cn("h-full w-full object-cover", imageClassName)}
                    src={imageUrl}
                    alt={alt}
                />
            ) : Icon ? (
                <Icon className={cn("size-5 ", iconClassName)} />
            ) : null}
        </div>
    );
};
export default Avatar;
