import { type FC } from "react";
import { ButtonLink } from "~/components/button";
import Hide from "~/components/hide";
import type { IconType } from "~/types";
import { cn } from "~/utils";

interface Props {
    Illustrations: IconType;
    title: string;
    titleClassName?: string;
    description: string;
    ctaLink?: string;
    ctaLabel?: string;
    illustrationsClassName?: string;
    wrapperClassName?: string;
}

export const GeneralFallbackUI: FC<Props> = ({
    title,
    titleClassName,
    description,
    ctaLabel,
    Illustrations,
    illustrationsClassName,
    ctaLink,
    wrapperClassName,
}) => {
    return (
        <div
            className={cn(
                "center h-full flex flex-col space-y-4",
                wrapperClassName
            )}
        >
            <Illustrations
                className={cn(
                    "size-60 text-dark-green",
                    illustrationsClassName
                )}
            />

            <div className={"text-center"}>
                <h2 className={cn("text text-white pb-2 font-semibold", titleClassName)}>
                    {title}
                </h2>
                <p className={`max-w-md text-white text-center text-sm text-dark/60`}>
                    {description}
                </p>
                <Hide condition={!ctaLink}>
                    <div className={"pt-7"}>
                        <ButtonLink
                            outline
                            className={
                                "mx-auto  w-fit border-transparent bg-transparent  p-0 text-primary"
                            }
                            to={ctaLink!}
                            replace
                        >
                            {ctaLabel ?? "Reload"}
                        </ButtonLink>
                    </div>
                </Hide>
            </div>
        </div>
    );
};
