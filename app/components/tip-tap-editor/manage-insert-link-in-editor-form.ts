import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormField } from "~/utils/render-form-field";

// --------------  validation schema --------------

const InsertEditorUrlFormSchema = z.object({
    url: z
        .string({ message: "link must be a string" })
        .url({ message: "link must be a valid link" }),
});

export type InsertEditorLinkFormType = z.infer<
    typeof InsertEditorUrlFormSchema
>;

// ------------ end validation schema -------------
export const useManageInsertUrlInEditorForm = (defaultUrl?: string) => {
    const {
        handleSubmit,
        register,
        control,
        reset: resetForm,
        formState: { errors },
    } = useForm<InsertEditorLinkFormType>({
        resolver: zodResolver(InsertEditorUrlFormSchema),
    });

    const field: FormField<InsertEditorLinkFormType> = {
        name: "url",
        register,
        defaultValue: defaultUrl,
        placeholder: "http://www/images/path/imag/1",
        hasError: !!errors.url?.message,
    };

    return { handleSubmit, field, resetForm, control };
};
