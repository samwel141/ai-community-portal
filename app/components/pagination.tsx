//⚠️Note: This is temporary pagination UI, does not align with the one in design, it will be removed in future

import { FC } from "react";

import { twMerge } from "tailwind-merge";
import { Button } from "~/components/button";
import Hide from "~/components/hide";
import useSearchParamsState from "~/hooks/useSearchParamsState";
import { cn } from "~/utils";

interface IPagination {
    buttonClassName?: string;
    totalPages: number;
    wrapperClassName?: string;
}

const Pagination: FC<IPagination> = ({
    buttonClassName,
    // onPrevious,

    // setPage,
    totalPages = 0,
    wrapperClassName,
}) => {
    const [searchParams, setSearchParams] = useSearchParamsState<{
        page: number;
    }>();

    const currentPage = Number(searchParams.page) || 1;

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setSearchParams({
                page: currentPage - 1,
            });
        }
    };

    const handleNextPage = () => {
        console.log("[currentPage + 1]", currentPage + 1);

        if (currentPage <= totalPages) {
            setSearchParams({
                page: currentPage + 1,
            });
        }
    };

    return (
        <Hide condition={totalPages <= 1}>
            <div
                className={twMerge(
                    "flex items-center justify-between border-t border-t-[#F7F2F2] px-6 py-3.5",
                    wrapperClassName
                )}
            >
                <div className={"text-sm font-medium text-gray-900"}>
                    Page {currentPage} of {totalPages}
                </div>
                <div className={"flex space-x-3 text-sm font-medium"}>
                    <Button
                        disabled={currentPage <= 1}
                        onClick={handlePreviousPage}
                        className={twMerge(
                            `border border-gray-400/80 bg-transparent py-2 ${
                                currentPage <= 1
                                    ? "cursor-not-allowed text-[#1E1E1E] active:ring-0"
                                    : "text-primary"
                            }`,
                            buttonClassName
                        )}
                    >
                        Previous
                    </Button>
                    <Button
                        disabled={currentPage === totalPages}
                        onClick={handleNextPage}
                        className={cn(
                            "border border-gray-400/80 bg-transparent py-2 text-primary ",
                            {
                                "cursor-not-allowed text-[#1E1E1E]  active:ring-0":
                                    currentPage === totalPages,
                            },
                            buttonClassName
                        )}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </Hide>
    );
};
export default Pagination;
