import { FC, Fragment } from "react";
import SkeletonLoader from "~/components/skeleton-loader";
import { cn } from "~/utils";

interface Props {
    columns?: number;
    className?: string;
    dataLoadingClassName?: string;
    rows?: number;
}

export const TableDataLoading: FC<Props> = ({
    columns = 6,
    className,
    dataLoadingClassName,
    rows = 13,
}) => {
    return (
        <Fragment>
            {[...Array(rows)].map((_, index) => (
                <div
                    style={{
                        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    }}
                    className={cn(
                        ` grid gap-5 border-b border-gray-200 px-4 py-6 first:pt-0`,
                        className
                    )}
                    key={index}
                >
                    {[...Array(columns)].map((_, index) => (
                        <SkeletonLoader
                            key={index}
                            className={dataLoadingClassName}
                        />
                    ))}
                </div>
            ))}
        </Fragment>
    );
};
