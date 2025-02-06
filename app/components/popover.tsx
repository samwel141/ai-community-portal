import * as PopoverPrimitive from "@radix-ui/react-popover";
import { PopoverContentProps, PopoverProps } from "@radix-ui/react-popover";
import { ElementRef, FC, forwardRef } from "react";
import SearchBox from "~/components/search-box";
import { cn } from "~/utils";

// Define the extended interface
interface ExtendedPopoverContentProps extends PopoverContentProps {
    responsive?: boolean;
}

const Popover = (props: PopoverProps) => {
    return <PopoverPrimitive.Root {...props} />;
};

const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverClose = PopoverPrimitive.Close;

const PopoverContent = forwardRef<
    ElementRef<typeof PopoverPrimitive.Content>,
    ExtendedPopoverContentProps
>(
    (
        {
            className,
            align = "center",
            sideOffset = 4,
            responsive = true,
            ...props
        },
        ref
    ) => (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                ref={ref}
                align={align}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 rounded-lg border border-swiss-coffee bg-white p-2 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    { "popover-content": responsive },
                    className
                )}
                {...props}
            />
        </PopoverPrimitive.Portal>
    )
);

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverSearch: FC<{ onChange: (value: string) => void }> = () => {
    return (
        <div className={"border-b px-2 py-1.5"}>
            <SearchBox
                className={
                    "border-none pl-10 placeholder:text-black/50 focus:ring-0"
                }
            />
        </div>
    );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Search = PopoverSearch;
Popover.Close = PopoverClose;
Popover.Arrow = PopoverPrimitive.Arrow;

export default Popover;
