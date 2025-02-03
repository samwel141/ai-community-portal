import {
    createElement,
    type ElementType,
    forwardRef,
    type HTMLAttributes,
    type ReactNode,
} from "react";
import { cn } from "~/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    borderSize?: "sm" | "md";
    as?: ElementType;
}

const Card = forwardRef<HTMLDivElement, Props>(
    ({ children, className, borderSize = "md", as = "div", ...rest }, ref) => {
        return createElement(
            as,
            {
                ...rest,
                ref,
                className: cn(
                    "overflow-hidden rounded-xl p-3 border-westar/70 ",
                    { border: borderSize === "md" },
                    className
                ),
            },
            children
        );
    }
);

Card.displayName = "Card";
export default Card;
