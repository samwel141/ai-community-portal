import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ChangePasswordSchema, ChangePasswordType } from "~/api/change-password/change-password-schema";

import { FormField } from "~/utils/render-form-field";

export const checkPasswordValidity = (
    password: string
): {
    name: string;
    isValid: boolean;
}[] => {
    return [
        {
            name: "Must be at least 8 characters",
            isValid: password?.length >= 8,
        },
        {
            name: "Must contains at least one uppercase",
            isValid: new RegExp("(?=.*[A-Z])").test(password),
        },
        {
            name: "Must contains at least one number",
            isValid: new RegExp("(?=.*[0-9])").test(password),
        },
        {
            name: "Must contain at least one special character",
            isValid: new RegExp("(?=.*[!@#$%^&*])").test(password),
        },
    ];
};

const useManageChangePassword = () => {
    const {
        handleSubmit,
        watch,
        register,
        formState: { errors },
    } = useForm<ChangePasswordType>({
        resolver: zodResolver(ChangePasswordSchema),
    });

    const fields: FormField<ChangePasswordType>[] = [
        {
            name: "newPassword",
            label: "New Password",
            type: "password",
            placeholder: "Enter your new password",
            register,
            hasError: !!errors.newPassword?.message,
        },
        {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Confirm password",
            register,
            hasError: !!errors.confirmPassword?.message,
        },
    ];

    const newPassword = watch("newPassword", "");
    const passwordConstraints = checkPasswordValidity(newPassword);

    return {
        fields,
        handleSubmit,
        passwordConstraints,
    };
};
export default useManageChangePassword;
