import { forwardRef, ThHTMLAttributes } from "react";
import { cn } from "~/utils";

export const TableHead = forwardRef<
    HTMLTableCellElement,
    ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            "px-6 text-left text-[13.5px] font-medium text-secondary-950   [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            className
        )}
        {...props}
    />
));
TableHead.displayName = "TableHead";
