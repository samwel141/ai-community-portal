import type { FC, LabelHTMLAttributes } from "react";
import { cn } from "~/utils";

interface LabelProps
    extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "children"> {
    label: string;
    optional?: boolean;
}

const Label: FC<LabelProps> = ({ htmlFor, label, className, optional }) => (
    <label
        htmlFor={htmlFor}
        className={cn(
            "items-between text-[12px] font-[300] leading-6",
            className
        )}
    >
        <span className="text-textColor">{label}</span>
        {optional && (
            <small className="font-light tracking-wide text-textColor">
                ( Optional )
            </small>
        )}
    </label>
);

export default Label;
