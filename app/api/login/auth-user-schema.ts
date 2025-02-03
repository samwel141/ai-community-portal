import { z } from "zod";
import {
    ApiDetailsSchema,
    EntityIdSchema,
    NoneEmptyStringSchema,
    SexSchema,
} from "~/utils/zod-common";

// --------------  validation schema --------------

const RoleSchema = z.object({
    name: z.string({ message: "Name must be a string" }),
    permissions: z.array(
        z.string({ message: "Permissions must be an array of strings" })
    ),
});

export const AuthUserSchema = z.object({
    id: EntityIdSchema.transform(String),
    avatar: NoneEmptyStringSchema("avatar").optional(),
    fullName: NoneEmptyStringSchema("full name"),
    emailAddress: NoneEmptyStringSchema("email"),
    sex: SexSchema.optional(),
    // isFirstTime: z.boolean().optional(),
    token: NoneEmptyStringSchema("token"),
});

export type AuthUserType = z.infer<typeof AuthUserSchema>;

//--------------------------------------------------------------

export const AuthUserSchemaWithRoleSchema = ApiDetailsSchema(
    AuthUserSchema.extend({
        role: z.array(RoleSchema),
    })
);

export type AuthUserSchemaWithRoleType = z.infer<
    typeof AuthUserSchemaWithRoleSchema
>;

// ------------ end validation schema -------------
