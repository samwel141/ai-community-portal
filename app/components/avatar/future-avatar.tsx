import { FC, HTMLAttributes } from "react";
import { IconType } from "~/types";
import { cn } from "~/utils";

interface FutureAvatarProps extends HTMLAttributes<HTMLDivElement> {}

const FutureAvatar = ({ className, children, ...rest }: FutureAvatarProps) => {
    return (
        <div
            {...rest}
            className={cn(
                "center size-9 shrink-0 overflow-hidden rounded-full bg-surface-container ",
                className
            )}
        >
            {children}
        </div>
    );
};

export interface AvatarImageProps extends HTMLAttributes<HTMLImageElement> {
    alt: string;
    src: string;
}

const AvatarImage: FC<AvatarImageProps> = ({ className, alt, ...rest }) => {
    return (
        <img className={cn(" object-cover", className)} {...rest} alt={alt} />
    );
};

export interface AvatarIconProps {
    Icon: IconType;
    className?: string;
    strokeWidth?: number;
}

const AvatarIcon: FC<AvatarIconProps> = ({ strokeWidth, className, Icon }) => {
    return (
        <Icon
            className={cn("size-5 text-primary-500", className)}
            strokeWidth={strokeWidth}
        />
    );
};

FutureAvatar.Image = AvatarImage;
FutureAvatar.Icon = AvatarIcon;

export default FutureAvatar;
