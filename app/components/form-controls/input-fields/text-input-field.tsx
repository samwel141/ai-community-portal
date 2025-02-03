import { type ComponentType, forwardRef, type InputHTMLAttributes } from "react";
import { FieldContainer } from "~/components/form-controls/common";
import { TextInputBasic } from "~/components/form-controls/input-fields/text-input-basic";
import Label from "~/components/form-controls/label";

export type InputType =
    | "text"
    | "email"
    | "password";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
    type?: InputType;
    wrapperClassName?: string;
    labelClassName?: string;
    label: string;
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const inputTypeMap: Record<InputType, ComponentType<any>> = {
    text: TextInputBasic,
    email: TextInputBasic,
    password: TextInputBasic,
};

const TextInputField = forwardRef<HTMLInputElement, Props>(
    (
        {
            type = "text",
            label,
            wrapperClassName,
            labelClassName,
            ...props
        },
        ref
    ) => {
        const InputComponent = inputTypeMap[type] || TextInputBasic;

        return (
            <FieldContainer className={wrapperClassName}>
                <Label label={label} className={labelClassName} />
                <InputComponent
                    type={type}
                    ref={ref}
                    {...props}
                />
            </FieldContainer>
        );
    }
);

TextInputField.displayName = "TextInputField";
export default TextInputField;
