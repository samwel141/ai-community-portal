import { forwardRef, type InputHTMLAttributes } from "react";
import { inputClassNames } from "~/components/form-controls/common";
import { cn } from "~/utils";

export interface TextInputBasicProps
    extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}

export const TextInputBasic = forwardRef<HTMLInputElement, TextInputBasicProps>(
    ({ hasError, className, ...rest }, ref) => {
        return (
            <input
                ref={ref}
                {...rest}
                className={cn(inputClassNames, className, {
                    "border-rose-500 text-textColor bg-red-500 focus:border-rose-500 focus:ring-rose-500/30  ":
                        hasError,
                })}
            />
        );
    }
);

TextInputBasic.displayName = "TextInputBasic";
