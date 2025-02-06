import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormField } from "~/utils/render-form-field";
import { YoutubeUrlSchema } from "~/utils/zod-common";

// --------------  validation schema --------------

const YoutubeUrlEditorFormSchema = z.object({
    url: YoutubeUrlSchema,
});

export type YoutubeUrlEditorFormType = z.infer<
    typeof YoutubeUrlEditorFormSchema
>;

// ------------ end validation schema -------------
export const useManageInsertYoutubeVideoUrlInEditorForm = (
    defaultUrl?: string
) => {
    const {
        handleSubmit,
        register,
        control,
        reset: resetForm,
        formState: { errors },
    } = useForm<YoutubeUrlEditorFormType>({
        resolver: zodResolver(YoutubeUrlEditorFormSchema),
    });

    const field: FormField<YoutubeUrlEditorFormType> = {
        name: "url",
        register,
        label: "Paste Youtube video url",
        defaultValue: defaultUrl,
        placeholder: "https://www.youtube.com/watch?v=example",
        hasError: !!errors.url?.message,
    };

    return { handleSubmit, field, resetForm, control };
};
