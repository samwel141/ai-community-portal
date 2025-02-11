import { zodResolver } from "@hookform/resolvers/zod";
import { log } from "node:console";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormField } from "~/utils/render-form-field";
import { NoneEmptyStringSchema, OptionalEmailSchema, PositiveNumberSchema } from "~/utils/zod-common";



// ------------------------ Validation Schema -----------------------------

const passwordSchema = NoneEmptyStringSchema("password");

const SignUpFormSchema = z.object({
  username: NoneEmptyStringSchema("Username"),
  firstname: NoneEmptyStringSchema("firstname"),
  lastname: NoneEmptyStringSchema("lastname"),
  gender: PositiveNumberSchema("gender"),
  email: OptionalEmailSchema,
  password: passwordSchema,
  confirmPassword: NoneEmptyStringSchema("confirmPassword"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
});

type SignUpFormType = z.infer<typeof SignUpFormSchema>

// ------------------------ End Validation Schema --------------------------


export enum Gender {
    MALE = 1,
    FEMALE,
}

const genderMap: Record<Gender, string> = {
    [Gender.MALE]: "Male",
    [Gender.FEMALE]: "Female",
};

const useManageSignUpForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<SignUpFormType>({
        resolver: zodResolver(SignUpFormSchema),
    });

    console.log(["errors", errors]);

    const fields: FormField<SignUpFormType>[] = [
        {
            name: "username",
            label: "Username",
            inputType: "textInput",
            register,
            placeholder: "Enter your username",
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            hasError: !!errors.username?.message,
        },
        {
            name: "firstname",
            label: "Firstname",
            inputType: "textInput",
            register,
            placeholder: "Enter your firstname",
            className: "cols-pan-2",
            wrapperClassName: "cols-pan-2",
            hasError: !!errors.firstname?.message,
        },
        {
            name: "lastname",
            label: "Lastname",
            inputType: "textInput",
            register,
            placeholder: "Enter your lastname",
            className: "cols-pan-2",
            wrapperClassName: "cols-pan-2",
            hasError: !!errors.lastname?.message,
        },
        {
            name: "gender",
            label: "Gender",
            inputType: "select",
            register,
            options: [
                {
                    value: Gender.MALE,
                    label: genderMap[Gender.MALE],
                },
                {
                    value: Gender.FEMALE,
                    label: genderMap[Gender.FEMALE],
                },
            ],
            placeholder: "Select Gender",
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            hasError: !!errors.gender?.message,
        },
        {
            name: "email",
            label: "Email",
            inputType: "textInput",
            register,
            options: [],
            placeholder: "Enter your Email",
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            hasError: !!errors.email?.message,
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
        {
            name: "confirmPassword",
            label: "Confirm Password",
            inputType: "textInput",
            type: "password",
            register,
            placeholder: "Confirm password",
            hasError: !!errors.confirmPassword?.message,
        },
    ];

    return { handleSubmit, fields };
};

export default useManageSignUpForm;
