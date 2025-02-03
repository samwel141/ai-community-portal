import { type FC, forwardRef, type SelectHTMLAttributes } from "react";
import {
    ErrorIcon,
    ErrorMessage,
    FieldContainer,
    inputClassNames,
} from "~/components/form-controls/common";
import Label from "~/components/form-controls/label";

import { cn } from "~/utils";
import type { SelectInputOptionType } from "~/utils/zod-common";

export type SelectOption = { value: string | number; label: string };

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    hasError?: boolean;
    options: Array<SelectInputOptionType>;
}

export interface SelectInputProps extends SelectFieldProps {
    errorMessage?: string;
    label?: string;
    optional?: boolean;
    wrapperClassName?: string;
    labelClassName?: string;
    defaultValue?: string | number;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectInputProps>(
    ({ className, hasError, defaultValue, options = [], ...rest }, ref) => {
        return (
            <select
                ref={ref}
                {...rest}
                defaultValue={defaultValue}
                className={cn(inputClassNames, className, {
                    "border-rose-500 focus:border-rose-500 focus:ring-rose-500/30":
                        hasError,
                })}
            >
                <option disabled={true} selected value="">
                    --- Choose ---
                </option>
                {options.map((option) => {
                    const isSelected = option.value == defaultValue;
                    return (
                        <option
                            key={option.label}
                            selected={isSelected || option.selected}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    );
                })}
            </select>
        );
    }
);

SelectField.displayName = "SelectField";

const SelectInput: FC<SelectInputProps> = forwardRef<
    HTMLSelectElement,
    SelectInputProps
>(
    (
        {
            label,
            hasError,
            optional,
            errorMessage,
            wrapperClassName,
            labelClassName,
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
                <div className={"relative"}>
                    <SelectField hasError={hasError} {...rest} ref={ref} />
                    {hasError && <ErrorIcon />}
                </div>
                {hasError && <ErrorMessage message={errorMessage} />}
            </FieldContainer>
        );
    }
);

SelectInput.displayName = "SelectInput";

export default SelectInput;
