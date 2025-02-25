import { ChangePasswordType } from "~/api/change-password/change-password-schema";
import { patch } from "~/utils/httpclient";

export const changePassword = async (
    token: string,
    data: ChangePasswordType
) => {
    return await patch(`/auth/change-password`, data, token);
};
