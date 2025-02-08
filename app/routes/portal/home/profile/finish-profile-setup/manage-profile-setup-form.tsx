import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormField } from "~/utils/render-form-field";
import {
    NoneEmptyStringSchema,
} from "~/utils/zod-common";

// ------------  validation schema --------------

export const ProfileFormSchema = z.object({
    occupation: NoneEmptyStringSchema("Occupation"),
    description: NoneEmptyStringSchema("Description"),
    sectors: z.array(z.string().min(1, { message: "Sector is required" })),
    technologies: z.array(z.string().min(1, { message: "Technology is required" })),
    secondaryLevel: NoneEmptyStringSchema("SAP Code"),
    underGraduateLevel: NoneEmptyStringSchema("Under Graduate Level"),
    postGraduateLevel: NoneEmptyStringSchema("Post Graduate Level"),
    achievements: NoneEmptyStringSchema("Achievements"),
});

export type ProfileFormType = z.infer<typeof ProfileFormSchema>;

// ------------  validation schema --------------

export const useManageProfileInfoForm = () => {
  

    const {
        handleSubmit,
        register,
        control,
        setValue,
        formState: { errors },
    } = useForm<ProfileFormType>({
        resolver: zodResolver(ProfileFormSchema),
    });


    const profileFormFields: FormField<ProfileFormType>[] = [
        {
            name: "occupation",
            inputType: "textInput",
            label: "Occupation",
            placeholder: "Enter Occupation",
            wrapperClassName: "cols-pan-2",
            className: "focus:text-black",
            register,
            hasError: !!errors?.occupation?.message,
        },
        {
            name: "description",
            label: "Description",
            inputType: "textInput",
            placeholder: "Enter Description",
            register,
            hasError: !!errors?.description?.message,
        },
        {
            name: "secondaryLevel",
            inputType: "textInput",
            label: "Secondary Level School",
            placeholder: "Secondary Level School",
            register,
            hasError: !!errors?.secondaryLevel?.message,
        },
       
        {
            name: "underGraduateLevel",
            inputType: "textInput",
            label: "Under Graduate Level",
            placeholder: "Under Graduate Level",
            register,
            hasError: !!errors?.underGraduateLevel?.message,
        },
        {
            name: "postGraduateLevel",
            inputType: "textInput",
            label: "Post Graduate Level",
            placeholder: "Post Graduate Level",
            register,
            hasError: !!errors?.postGraduateLevel?.message,
        },
      
    ];

    return {
        register,
        handleSubmit,
        profileFormFields,
        setValue,
        control
    };
};
