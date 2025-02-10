import { createElement, ElementType, FC, ReactNode } from "react";
import { ModalSize } from "~/components/modal/modal-types";

import { cn } from "~/utils";

interface ModalPanelProps extends Omit<Partial<HTMLFormElement>, "children"> {
    children: ReactNode;
    size?: ModalSize;
    as?: ElementType;
}

export const ModalPanel: FC<ModalPanelProps> = ({
    children,
    className,
    size = "3xl",
    as = "div",
    ...otherProps
}) => {
    return createElement(
        as,
        {
            className: cn(
                "flex h-full flex-col bg-primary space-y-2 px-2 md:px-8 pb-12 pt-8 border border-1 border-secondary pb-1 mr-[30rem] md:mr-1",                
                { "w-[35rem] ": size === "3xl" },
                { "w-[34rem] ": size === "2xl" },
                { "w-[33rem] ": size === "xl" },
                { "w-[32rem] ": size === "lg" },
                { "w-[31rem] ": size === "md" },
                { "w-[30rem] ": size === "sm" },
                { "w-[22rem] ": size === "xs" },
                className
            ),
            ...otherProps,
        },
        children
    );
};
