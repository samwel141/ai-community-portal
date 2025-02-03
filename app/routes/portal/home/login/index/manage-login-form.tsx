import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema, LoginFormType } from "~/api/login/login-form-schema";
import { FormField } from "~/utils/render-form-field";

const useManageLoginForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginFormType>({
        resolver: zodResolver(LoginFormSchema),
    });

    const fields: FormField<LoginFormType>[] = [
        {
            name: "username",
            label: "User Number",
            inputType: "textInput",
            register,
            placeholder: "Enter your user number",
            hasError: !!errors.username?.message,
        },
        {
            name: "password",
            label: "Password",
            inputType: "textInput",
            type: "password",
            register,
            placeholder: "Enter your password",
            hasError: !!errors.password?.message,
        },
    ];

    return { handleSubmit, fields };
};

export default useManageLoginForm;
