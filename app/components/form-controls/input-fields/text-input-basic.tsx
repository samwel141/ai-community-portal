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
            autoComplete="off"
            style={{ 
              color: "white",
              background: "transparent",
            }}
            onFocus={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
            {...rest}
            className={cn(inputClassNames, className, {
              "border-gray-400 bg-transparent text-textColor focus:border-rose-500 focus:ring-rose-500/30":
                hasError,
              "bg-transparent": rest.value,
            })}
          />
          
        );
    }
);

TextInputBasic.displayName = "TextInputBasic";
