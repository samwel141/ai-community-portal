import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormField } from "~/utils/render-form-field";
import { NoneEmptyStringSchema, OptionalEmailSchema } from "~/utils/zod-common";



// ------------------------ Validation Schema -----------------------------

export const ContactFormSchema = z.object({
    firstname: NoneEmptyStringSchema("firstname"),
    lastname: NoneEmptyStringSchema("lastname"),
    email: OptionalEmailSchema,
    subject: NoneEmptyStringSchema("subject"),
    message: NoneEmptyStringSchema("message")
})
export type ContactFormType = z.infer<typeof ContactFormSchema>

// ------------------------ End Validation Schema --------------------------


const useManageContactForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<ContactFormType>({
        resolver: zodResolver(ContactFormSchema),
    });

    const fields: FormField<ContactFormType>[] = [
        {
            name: "firstname",
            label: "Firstname",
            inputType: "textInput",
            register,
            className: "cols-pan-2 w-full",
            wrapperClassName: "cols-pan-2 w-full",
            hasError: !!errors.firstname?.message,
        },
        {
            name: "lastname",
            label: "Lastname",
            inputType: "textInput",
            register,
            className: "cols-pan-2 w-full",
            wrapperClassName: "cols-pan-2 w-full",
            hasError: !!errors.lastname?.message,
        },
        {
            name: "email",
            label: "Email",
            inputType: "textInput",
            register,
            options: [],
            className: "cols-pan-2 text-textColor",
            wrapperClassName: "cols-pan-2 text-textColor",
            hasError: !!errors.email?.message,
        },
        {
            name: "subject",
            label: "Subject",
            inputType: "textInput",
            register,
            className: "cols-pan-2",
            wrapperClassName: "cols-pan-2",
            hasError: !!errors.subject?.message,
        },
        {
            name: "message",
            label: "Message",
            inputType: "textarea",
            register,
            className: "cols-pan-2 text-textColor",
            wrapperClassName: "cols-pan-2 text-textColor",
            hasError: !!errors.message?.message,
        },
    ];

    return { handleSubmit, fields };
};

export default useManageContactForm;
