import { z } from "zod";
import { NoneEmptyStringSchema } from "~/utils/zod-common";

// --------------  validation schema --------------

export const LoginFormSchema = z.object({
    username: NoneEmptyStringSchema("username"),
    password: NoneEmptyStringSchema("password"),
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;

// ------------ end validation schema -------------
