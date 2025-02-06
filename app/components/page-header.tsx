import { FC, type HTMLAttributes } from "react";
import { Button, ButtonLink } from "~/components/button";

import { PlusIcon } from "~/components/icons";
import SearchBox from "~/components/search-box";
import SkeletonLoader from "~/components/skeleton-loader";
import useSearchParamsState from "~/hooks/useSearchParamsState";
import { cn } from "~/utils";
import Hide from "~/components/hide";

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string;
    ctaLink?: string;
    ctaText?: string;
    hasFilter?: boolean;
    hasSearch?: boolean;
    searchPlaceholder?: string;
    loading?: boolean;
    disabledCta?: boolean;
    withIcon?: boolean;
}

const PageHeader: FC<Props> = ({
    title,
    ctaLink,
    ctaText,
    searchPlaceholder,
    hasFilter = true,
    hasSearch = true,
    loading,
    withIcon = true,
    className,
}) => {
    const [searchParams] = useSearchParamsState<{ q: string; page: number }>();

    if (loading && !searchParams.q) {
        return <PageHeaderLoading />;
    }

    return (
        <section className={cn("items-between py-3", className)}>
            <h1 className={"text-xl text-textColor font-semibold md:text-2xl"}>{title}</h1>
            <Hide condition={!hasSearch}>
            <SearchBox  placeholder={searchPlaceholder}/>
            </Hide>
       
            <div className={cn("flex items-center gap-3 ")}>
                <Button
                    outline
                    className={cn(
                        "border-westar border gap-1 py-2 text-primary-950",
                        {
                            hidden: !hasFilter,
                        }
                    )}
                >
                    <PlusIcon strokeWidth={2.2} className={"size-4"} />
                    <span>Add filter</span>
                </Button>

                {ctaLink && ctaText && (
                    <ButtonLink to={ctaLink} className={"py-2 gap-1"}>
                        {withIcon && (
                            <PlusIcon strokeWidth={2.2} className={"size-4"} />
                        )}
                        <span>{ctaText}</span>
                    </ButtonLink>
                )}
            </div>
        </section>
    );
};
export default PageHeader;

export const PageHeaderLoading = () => {
    return (
        <div className={"items-between pt-4 pb-3"}>
            <SkeletonLoader className={"w-80 rounded-full py-[1.1rem]"} />

            <div className={"flex items-center gap-3"}>
                <SkeletonLoader
                    className={"w-[7rem] rounded-full py-[1.1rem]"}
                />
                <SkeletonLoader
                    className={"w-[8.5rem] rounded-full py-[1.1rem]"}
                />
            </div>
        </div>
    );
};

