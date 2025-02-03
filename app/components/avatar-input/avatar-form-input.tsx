import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import AvatarInput, {
    AvatarInputProps,
} from "~/components/avatar-input/avatar-input";

export interface Props
    extends Omit<AvatarInputProps, "onChange" | "className"> {
    control: Control;
    name: string;
    label: string;
    wrapperClassName?: string;
}

export const AvatarFormInput: FC<Props> = (props) => {
    const { control, name, wrapperClassName, ...rest } = props;

    return (
        <Controller
            control={control}
            render={({ field: { onChange } }) => (
                <AvatarInput
                    {...rest}
                    className={wrapperClassName}
                    onChange={onChange}
                />
            )}
            name={name}
        />
    );
};
