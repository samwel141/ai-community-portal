import { z } from "zod";

const PASSWORD_CONSTRAINT_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

export const ChangePasswordSchema = z
    .object({
        newPassword: z
            .string()
            .min(8, "Password is too short - should be 8 chars minimum.")
            .regex(
                PASSWORD_CONSTRAINT_REGEX,
                "Password should contain: a number, uppercase and lowercase letters, and a special character"
            ),
        confirmPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });

export type ChangePasswordType = z.infer<typeof ChangePasswordSchema>;
