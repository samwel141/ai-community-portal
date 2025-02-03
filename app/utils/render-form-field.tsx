import type { ReactNode } from "react";
import type { Control, FieldValues, Path, UseFormRegister } from "react-hook-form";

import { AvatarFormInput } from "~/components/avatar-input";
import Checkbox from "~/components/form-controls/checkbox";
import TextInputField, {
    type InputType,
} from "~/components/form-controls/input-fields/text-input-field";

import SelectInput, {
    type SelectInputProps,
} from "~/components/form-controls/select-input";
import type { TextInputProps } from "~/components/form-controls/text-input";
import Textarea from "~/components/form-controls/textarea";
import { cn } from "~/utils";
import type { SelectInputOptionType } from "~/utils/zod-common";

type TFormFieldTypes =
    | "select"
    | "textInput"
    | "textarea"
    | "checkbox"
    | "avatar-input"

type DefaultValue =
    | string
    | number
    | string[]
    | undefined
    | SelectInputOptionType[];

export interface FormField<TFieldValues extends FieldValues = FieldValues>
    extends Omit<TextInputProps, "defaultValue">,
        Partial<
            Pick<SelectInputProps, "options" | "wrapperClassName" | "multiple">
        > {
    defaultChecked?: boolean;
    onSearch?: (value: string) => void;
    isPassword?: boolean;
    minValue?: number;
    rangeUnit?: string;
    // _prefix?: IconType | string;
    // currency?: "Tsh" | "$";
    multiselect?: boolean;
    innerWrapperClassName?: string;
    step?: number;
    rows?: number;
    type?: InputType;
    maxValue?: number;
    defaultValue?: DefaultValue;
    emptyDataMessage?: string;
    inputType?: TFormFieldTypes;
    loading?: boolean;
    control?: Control<TFieldValues>;
    register?: UseFormRegister<TFieldValues>;
    name: Path<TFieldValues>;
    // resetOn?: ResetOn;
    wrapperClassName?: string;
    onInputChange?: (value: string) => void;
    triggerComponent?: ReactNode;
    loadingComponent?: ReactNode;
    // renderOption?: <TOption extends SelectInputOptionType>(
    //     props: ComboBoxOptionProp<TOption>
    // ) => ReactNode;
}

const formFields = {
    checkbox: Checkbox,
    textarea: Textarea,
    select: SelectInput,
    // combobox: ComboboxInput,
    "avatar-input": AvatarFormInput,
    // "multi-image-input": MultiImageFormInput,
    textInput: TextInputField,
    // "pdf-input": PdfFormInput,
};

/**
 * Renders a form field based on the given FormField object.
 *
 * @param {FormField} field - The FormField object to render.
 * @returns {ReactNode} - The rendered form field component.
 */
function renderFormField<TFieldValues extends FieldValues = FieldValues>(
    field: FormField<TFieldValues>
): ReactNode {
    const defaultLabelClassName = "text-gray-700 font-normal text-[13.5px]";
    const defaultClassName =
        "lg:py-2.5 border-[1px] shadow-none bg-white text-gray-700 xl:text-[14.5px]";

    const {
        register,
        className,
        labelClassName,
        name,
        control,
        inputType = "textInput",
        ...otherProps
    } = field;

    const fieldClassName = {
        className: cn(defaultClassName, className, {
            "lg:py-0 text-primary": inputType === "checkbox",
        }),
        labelClassName: cn(defaultLabelClassName, labelClassName),
    };

    const FormField = formFields[inputType];

    return (
        // @ts-expect-error: Type 'string | undefined' is not assignable to type 'string'.
        <FormField
            {...(!control && register ? register(name) : {})}
            {...(control && { control, name })}
            {...otherProps}
            {...fieldClassName}
        />
    );
}

export default renderFormField;
