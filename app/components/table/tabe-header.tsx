import { forwardRef, HTMLAttributes } from "react";
import { cn } from "~/utils";

export const TableHeader = forwardRef<
    HTMLTableSectionElement,
    HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead
        ref={ref}
        className={cn(
            "border-b border-b-[#F7F2] capitalize [&_th]:py-3.5  [&_th]:font-medium [&_th]:text-primary-950 ",
            className
        )}
        {...props}
    />
));
TableHeader.displayName = "TableHeader";
