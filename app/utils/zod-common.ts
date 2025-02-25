import { z } from "zod";
import type { EnumLabelValueMap } from "~/types";
import { formatDate } from ".";


export const IdNameSchema = z.object({
    id: z.number().min(1, { message: "id must be none-negative number" }),
    name: z.string().min(1, { message: "name must be noe-empty string" }),
});
export type IdNameType = z.infer<typeof IdNameSchema>;

export const IdFullNameSchema = IdNameSchema.omit({ name: true }).extend({
    fullName: z.string({ message: "Invalid name" }).min(1),
});
export type IdFullNameType = z.infer<typeof IdFullNameSchema>;

const PaginationSchema = z.object(
    {
        totalPages: z.number({
            message: "totalPages must be a number",
        }),
        currentPage: z.number({
            message: "currentPage must be a number",
        }),
    },
    { message: "pagination object is required" }
);

export type PaginationType = z.infer<typeof PaginationSchema>;

//--------------------------------------------------------------
/**
 * Creates an ApiResponseSchema object.
 *
 * @template T - The type of schema to use.
 * @param {T} schema - The schema to be used for the data property.
 * @returns - The ApiResponseSchema object.
 */

export const ApiListSchema = <T extends z.ZodType>(schema: T) => {
    return z.object(
        {
            data: z.array(schema),
            pagination: PaginationSchema,
        },
        { message: "Invalid data returned" }
    );
};

export const ApiListWithoutPaginationSchema = <T extends z.ZodType>(
    schema: T
) => {
    return z.object(
        {
            data: z.array(schema),
        },
        { message: "Invalid data returned" }
    );
};

export const Timestamp = z.object({
    createdAt: z.string({
        message: "createdAt must be a valid date string",
    }),
    updatedAt: z.string({
        message: "updatedAt must be a valid date string",
    }),
});

/**
 * ApiDetailsSchema is a function that takes a Zod schema as input and returns
 * a new ZodObject schema with a single property `data` that follows the provided
 * input schema.
 *
 * @param {T} schema - A ZodType indicating the schema that the `data` property should adhere to.
 * @returns {z.ZodObject<{ data: T }>} - A ZodObject schema with a `data` property based on the provided schema.
 */
export const ApiDetailsSchema = <T extends z.ZodType>(
    schema: T
): z.ZodObject<{ data: T }> => {
    return z.object({
        data: schema,
    });
};

//--------------------------------------------------------------

export const SelectInputOptionSchema = z.object({
    label: z.string().min(1, { message: "label type must be a number" }),
    value: z.coerce.number({ message: "value must be a number" }),
    selected: z.boolean({ message: "selected must be a boolean" }).optional(),
});

export type SelectInputOptionType = z.infer<typeof SelectInputOptionSchema>;

//--------------------------------------------------------------

// Todo: Add regex to exclude special character
export const NoneEmptyStringSchema = (label: string) => {
    return z
        .string({ message: `${label} must be a string` })
        .min(1, { message: `${label} must be none-empty string` });
};

//--------------------------------------------------------------

export const ContainOnlyAlphabetic = (label: string) => {
    return z
        .string({ message: `${label} must be a string` })
        .trim()
        .min(1, { message: `${label} must be none-empty string` })
        .regex(/^[a-zA-Z\s-]+$/, { message: `${label} must be a string` });
};



const TZ_MOBILE_NO_REGEX = /^(\+?255|0)[6-9]\d{8}$/;

export const PhoneNumberSchema = NoneEmptyStringSchema("phoneNumber").regex(
    TZ_MOBILE_NO_REGEX,
    { message: "invalid phone number" }
);
// 0710557678
//--------------------------------------------------------------

export const YOUTUBE_VIDEO_URL_REGEX =
    /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

export const YoutubeUrlSchema = z
    .string({ message: "link must be a string" })
    .regex(YOUTUBE_VIDEO_URL_REGEX);

//--------------------------------------------------------------

//--------------------------------------------------------------
export const FullNamePhoneNumberSchema = z.object(
    {
        fullName: NoneEmptyStringSchema("fullName"),
        phoneNumber: PhoneNumberSchema,
    },
    {
        message: " object must container name and valid tz phone number ",
    }
);

//--------------------------------------------------------------

export const EntityIdSchema = z.coerce
    .number({ message: "id must be a number" })
    .positive({ message: "id must be a positive number" });
export const PositiveNumberSchema = (fieldName: string) =>
    z.coerce
        .number({ message: `${fieldName} must be a number` })
        .nonnegative({ message: `${fieldName} must be a non-negative number` });

//--------------------------------------------------------------

export const DateSchema = (label: string) =>
    NoneEmptyStringSchema(label)
        .refine(
            (date: any) => {
                const dateSchema = z.string().date();
                const datetimeSchema = z.string().datetime();

                if (dateSchema.safeParse(date).success) return true;
                else if (datetimeSchema.safeParse(date).success) return true;
                else false;
            },
            { message: "invalid date" }
        )
        .transform((date: any) => formatDate(date));

export const DateTimeSchema = (label: string) =>
    NoneEmptyStringSchema(label)
        .datetime(`${label} must be a valid date time`)
        .transform((date: any) => formatDate(date, "MMM DD, YYYY HH:mm"));

// //--------------------------------------------------------------

export enum Sex {
    MALE = 1,
    FEMALE,
}

export const SexSchema = z
    .nativeEnum(Sex, { message: "sex should be a number" })
    .transform((sex: Sex) => {
        return sex === Sex.MALE ? "Male" : "Female";
    });

export type SexType = z.infer<typeof SexSchema>;



export const OptionalEmailSchema = z
    .string()
    .optional()
    .refine(
        (email: any) => {
            if (email) {
                const schema = NoneEmptyStringSchema("email").email();
                const { success } = schema.safeParse(email);
                return success;
            }
            return true;
        },
        { message: "Invalid email address" }
    );

//--------------------------------------------------------------
