import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormField } from "~/utils/render-form-field";


// ------------------------ Validation Schema -----------------------------

const ForgotPasswordFormSchema = z.object({
    email: z
        .string({ message: "email must be a string" })
        .email({ message: "Invalid email address" })
        .min(1, { message: "email is required" }),
})

export type ForgotPasswordFormType = z.infer<typeof ForgotPasswordFormSchema>;

// ----------------------- End  validation schema -------------------------


const useManageForgotPasswordForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<ForgotPasswordFormType>({
        resolver: zodResolver(ForgotPasswordFormSchema),
    });

    const formFields: FormField<ForgotPasswordFormType>[] = [
        {
            name: "email",
            label: "Email",
            inputType: "textInput",
            register,
            placeholder: "Enter your email",
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            hasError: !!errors.email?.message,
        },
    ];

    return { handleSubmit, formFields };
};

export default useManageForgotPasswordForm;
