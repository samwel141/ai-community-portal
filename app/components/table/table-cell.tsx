import { forwardRef, TdHTMLAttributes } from "react";
import { cn } from "~/utils";

export const TableCell = forwardRef<
    HTMLTableCellElement,
    TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn(
            "px-6 py-2  text-dark-green align-middle text-[13.5px]",
            className
        )}
        {...props}
    />
));

TableCell.displayName = "TableCell";
