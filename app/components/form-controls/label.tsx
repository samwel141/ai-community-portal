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
            "items-between text-[13.5px] font-medium leading-6 text-red-500",
            className
        )}
    >
        <span className="text-gray-400">{label}</span>
        {optional && (
            <small className="font-light tracking-wide text-textColor">
                ( Optional )
            </small>
        )}
    </label>
);

export default Label;
