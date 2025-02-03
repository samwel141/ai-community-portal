import { FC, Fragment } from "react";
import Avatar, { AvatarProps } from "~/components/avatar/avatar";

import { cn } from "~/utils";

export interface AvatarCardProps extends AvatarProps {
    title: string;
    center?: boolean;
    titleClassName?: string;
    subtitle?: string;
    subtitleClassName?: string;
    wrapperClassName?: string;
    swap?: boolean;
}

const AvatarCard: FC<AvatarCardProps> = ({
    wrapperClassName,
    title,
    center,
    titleClassName,
    subtitleClassName,
    subtitle,
    className,
    swap,
    ...rest
}) => {
    const s = subtitle?.split("\n");

    return (
        <div
            className={cn(
                "flex items-center gap-2.5",
                { "flex-col text-center": !!center },
                wrapperClassName
            )}
        >
            {(rest.Icon || rest.imageUrl) && (
                <Avatar {...rest} className={cn("size-10", className)} />
            )}

            <div className={"flex flex-col"}>
                <p
                    className={cn(
                        "text-[13.5px] text-muted",
                        subtitleClassName
                    )}
                >
                    {s?.map((p, index) => (
                        <Fragment key={index}>
                            <span>{p}</span>
                            {s.length > 1 && index < s.length - 1 && (
                                <span className={"mx-1 font-medium opacity-60"}>
                                    |
                                </span>
                            )}
                        </Fragment>
                    ))}
                </p>
                <p
                    className={cn("text-sm font-medium", titleClassName, {
                        "order-first": swap,
                    })}
                >
                    {title}
                </p>
            </div>
        </div>
    );
};
export default AvatarCard;
