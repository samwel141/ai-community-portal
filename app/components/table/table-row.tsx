import { forwardRef, HTMLAttributes } from "react";
import { cn } from "~/utils";

export const TableRow = forwardRef<
    HTMLTableRowElement,
    HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(
            "border-b border-b-[#F7F2F2] odd:bg-secondary  text-gray-700 transition-colors  [&_td]:py-3.5",
            className
        )}
        {...props}
    />
));

TableRow.displayName = "TableRow";
