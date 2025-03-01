import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "app/components/button/button";
import { FC, ReactNode } from "react";
import { ModalSize as SlideOverSize } from "~/components/modal/modal-types";
import { useSliderOverContext } from "~/components/slider-over/slide-over";
import { cn } from "~/utils";

interface SlideOverPanelProps {
    children: ReactNode;
    className?: string;
    size?: SlideOverSize;
}

export const SliderOverPanel: FC<SlideOverPanelProps> = ({
    size = "sm",
    children,
    className,
}) => {
    const { onClose: setOpen } = useSliderOverContext();

    return (
        <div
            className={cn(
                "flex h-full bg-primary flex-col relative  rounded-xl border-8 border-[#df9152]",
                { "w-[35rem] ": size === "3xl" },
                { "w-[34rem] ": size === "2xl" },
                { "w-[33rem] ": size === "xl" },
                { "w-[32rem] ": size === "lg" },
                { "w-[31rem] ": size === "md" },
                { "w-[30rem] ": size === "sm" },
                { "w-[20rem] ": size === "xs" },
                className
            )}
        >
            {children}

            <Button
                type="button"
                onClick={() => setOpen(false)}
                className={
                    "center size-8 absolute top-1/2 -left-6 shrink-0 bg-[#DBE0CE] p-0 text-primary-950 hover:opacity-80 focus:ring-gray-300 active:ring-black/10"
                }
            >
                <ChevronRightIcon strokeWidth={2} className={"size-6"} />
            </Button>
        </div>
    );
};
