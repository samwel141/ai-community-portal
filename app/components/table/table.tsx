import {
    forwardRef,
    ForwardRefExoticComponent,
    HTMLAttributes,
    RefAttributes,
} from "react";
import { TableHead } from "~/components/table/tabe-head";
import { TableHeader } from "~/components/table/tabe-header";
import { TableBody } from "~/components/table/table-body";
import { TableCell } from "~/components/table/table-cell";
import { TableFooter } from "~/components/table/table-footer";
import { TableDataLoading } from "~/components/table/table-loading";
import { TableRow } from "~/components/table/table-row";
import { cn } from "~/utils";

interface TableProps extends HTMLAttributes<HTMLTableElement> {
    wrapperClass?: string;
}

interface TableComponent
    extends ForwardRefExoticComponent<
        TableProps & RefAttributes<HTMLTableElement>
    > {
    Header: typeof TableHeader;
    Head: typeof TableHead;
    Body: typeof TableBody;
    Cell: typeof TableCell;
    Footer: typeof TableFooter;
    Row: typeof TableRow;
    Loading: typeof TableDataLoading;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
    ({ className, wrapperClass, ...props }, ref) => (
        <div className={cn("relative w-full  overflow-auto", wrapperClass)}>
            <table
                ref={ref}
                className={cn("w-full caption-bottom text-sm", className)}
                {...props}
            />
        </div>
    )
) as TableComponent; // Cast the component to the extended type

Table.displayName = "Table";

// Assign the static properties
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Cell = TableCell;
Table.Footer = TableFooter;
Table.Row = TableRow;
Table.Loading = TableDataLoading;

export default Table;
