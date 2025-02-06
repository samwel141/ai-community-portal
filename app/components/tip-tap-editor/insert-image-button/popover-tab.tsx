import { Tab } from "@headlessui/react";
import { FC } from "react";
import { cn } from "~/utils";

export const EditorPopoverTabHeaders = () => {
    return (
        <Tab.List className={" text-sm space-x-3 relative"}>
            {/* line */}
            <div
                className={
                    "border-b z-10 w-full absolute bottom-0 border-opacity-30"
                }
            ></div>
            <div className={" flex gap-5 pl-3"}>
                {["Paste Link", "Upload"].map((tabLabel) => (
                    <PopoverTab key={tabLabel} label={tabLabel} />
                ))}
            </div>
        </Tab.List>
    );
};

const PopoverTab: FC<{ label: string }> = ({ label }) => {
    return (
        <Tab key={label}>
            {({ selected }) => (
                <p
                    className={cn(
                        "relative  inline-flex cursor-pointer border-transparent " +
                            "z-10 items-center rounded-t-xl gap-2 space-x-2 border-t " +
                            "border-x bg-transparent border-b-[#D9CECE]  px-6 " +
                            "pt-2 pb-1.5 text-sm font-medium whitespace-nowrap   text-center text-dark-green",
                        { " text-primary-950 border-westar bg-white": selected }
                    )}
                >
                    {label}
                </p>
            )}
        </Tab>
    );
};
