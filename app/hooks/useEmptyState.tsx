import { memo, useMemo } from "react"; // Define the type for our props
import Hide from "~/components/hide";
import { SearchIcon } from "~/components/icons";
import { useFallbackUI } from "~/hooks/useFallbackUI";
import useSearchParamsState from "~/hooks/useSearchParamsState";
import { IconType } from "~/types";
import { cn } from "~/utils";

type EmptyStateProps = {
    NoDataIcon: IconType;
    searchNotFoundText?: string;
    noDataTitle: string;
    noDataText: string;
    shouldShow: boolean;
    ctaLink?: string;
};

export const useEmptyState = ({
    NoDataIcon,
    searchNotFoundText,
    noDataTitle,
    noDataText,
    shouldShow,
    ctaLink,
}: EmptyStateProps) => {
    const [{ q: searchQuery }] = useSearchParamsState<{ q: string }>();

    const emptyState = useMemo(() => {
        return {
            Icon: searchQuery ? SearchIcon : NoDataIcon,
            title: searchQuery ? "Not Found" : noDataTitle,
            description: searchQuery ? searchNotFoundText : noDataText,
        };
    }, [NoDataIcon, searchNotFoundText, noDataTitle, noDataText, searchQuery]);

    const EmptyState = useFallbackUI({
        Icon: emptyState.Icon,
        description: emptyState.description,
        title: emptyState.title,
        ctaLink: searchQuery ? "" : ctaLink,
    });

    const EmptyStateComponent = memo(
        ({ className }: { className?: string }) => (
            <Hide condition={shouldShow}>
                <EmptyState
                    className={cn(
                        "h-[73vh] bg-surface-container/20",
                        className
                    )}
                />
            </Hide>
        )
    );

    EmptyStateComponent.displayName = "EmptyStateComponent";

    return EmptyStateComponent;
};
