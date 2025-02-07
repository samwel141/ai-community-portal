import { forwardRef, type InputHTMLAttributes } from "react";
import {
    ErrorIcon,
    ErrorMessage,
    FieldContainer,
    inputClassNames,
} from "~/components/form-controls/common";
import Label from "~/components/form-controls/label";

import { cn } from "~/utils";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
    hasError?: boolean;
    label?: string;
    optional?: boolean;
    supportiveText?: string;
    labelClassName?: string;
    wrapperClassName?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ className, hasError, ...rest }, ref) => {
        return (
            <input
                ref={ref}
                type="text"
                autoComplete={"off"}
                {...rest}
                className={cn(
                    inputClassNames,
                    {
                        "border-red-500 text-textColor focus:border-rose-500 focus:ring-rose-500/30":
                            hasError,
                    },
                    className
                )}
            />
        );
    }
);

InputField.displayName = "InputField";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            label,
            hasError,
            optional,
            errorMessage,
            supportiveText,
            labelClassName,
            wrapperClassName,
            ...rest
        },
        ref
    ) => {
        return (
            <FieldContainer className={wrapperClassName}>
                {label && (
                    <Label
                        htmlFor={rest.id}
                        label={label}
                        optional={optional}
                        className={labelClassName}
                    />
                )}
                <div className={cn("relative", { "pb-1": supportiveText })}>
                    <InputField ref={ref} hasError={hasError} {...rest} />
                    {hasError && <ErrorIcon />}
                </div>
                {supportiveText && (
                    <p className="text-xs/none leading-tight text-textColor">
                        {supportiveText}
                    </p>
                )}
                {hasError && <ErrorMessage message={errorMessage} />}
            </FieldContainer>
        );
    }
);

TextInput.displayName = "TextInput";

export default TextInput;
