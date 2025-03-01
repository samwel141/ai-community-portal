import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormField } from "~/utils/render-form-field";
import { NoneEmptyStringSchema, PositiveNumberSchema } from "~/utils/zod-common";



// ------------------------ Validation Schema -----------------------------


const NewPostFormSchema = z.object({
  avatar: NoneEmptyStringSchema("Username").url({message: "Avatar must be a valid URL"}),
  postType: PositiveNumberSchema("postType"),
  tags: z.array(z.string().min(1, { message: "Tag is required" })),
  caption: NoneEmptyStringSchema("caption"),
  links: NoneEmptyStringSchema("links"),
  cc: NoneEmptyStringSchema("cc"),
});

export type NewPostFormType = z.infer<typeof NewPostFormSchema>

// ------------------------ End Validation Schema --------------------------



const useManageNewPostForm = () => {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm<NewPostFormType>({
        resolver: zodResolver(NewPostFormSchema),
    });

    console.log(["errors", errors]);

    const fields: FormField<NewPostFormType>[] = [
        {
            name: "avatar",
            label: "Avatar",
            inputType: "avatar-input",
            control,
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            hasError: !!errors.avatar?.message,
        },
        {
            name: "postType",
            label: "Post Type",
            inputType: "select",
            register,
            placeholder: "Post type",
            className: "cols-pan-2",
            wrapperClassName: "cols-pan-2",
            hasError: !!errors.postType?.message,
        },
        {
            name: "caption",
            label: "Caption",
            inputType: "textarea",
            register,
            placeholder: "Write caption",
            className: "cols-pan-2",
            wrapperClassName: "cols-pan-2",
            hasError: !!errors.caption?.message,
        },
        {
            name: "links",
            label: "Links",
            inputType: "textInput",
            register,
            placeholder: "Paste links",
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            hasError: !!errors.links?.message,
        },
        {
            name: "cc",
            label: "CC",
            inputType: "textInput",
            register,
            placeholder: "Enter CC",
            hasError: !!errors.cc?.message,
        },
    ];

    return { handleSubmit, fields };
};

export default useManageNewPostForm;
