import { LoginFormType } from "~/api/login/login-form-schema";
import { fakeNetwork } from "~/utils/fake-nerwork";
import { post } from "~/utils/httpclient";
import { SafeExecuteReturnType } from "~/utils/safe-excute.server";

export const sampleAuthUserData = {
    data: {
        id: "93",
        fullName: "Kolwezi Mayor",
        emailAddress: "kolwezi.mayor@gmail.com",
        avatar: "ekdked",
        sex: 1,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJwcm9maWxlIjp7ImlkIjo5MywiZnVsbE5hbWUiOiJLb2x3ZXppIE1heW9yIiwiZW1haWwiOiJrb2x3ZXppLm1heW9yQGdtYWlsLmNvbSIsInBob25lTnVtYmVyIjoiMDc2NzI1NDY3OCIsInNpZE51bWJlciI6bnVsbCwic2VjdG9yIjpudWxsLCJzZXgiOjIsInR5cGUiOjUsIm9yZ2FuaXphdGlvbklkIjoxNywiYXZhdGFyIjpudWxsfSwiaWF0IjoxNzI0ODU1Njc3LCJleHAiOjE3MjQ4NzcyNzd9.vCcuI7lPpA-nIjb122Oe2GnsjYUXsmLJUWxzRISmx8s",
        role: [
            {
                name: "Admin",
                permissions: [
                    "view-admin-dashboard",
                    "view-portal",
                ],
            },
        ],
    },
};

/**
 * Asynchronously handles the login process by posting the provided form data.
 *
 * @param {LoginFormType} data - The data containing login credentials to be submitted.
 * @returns - A promise that resolves to the response of the post-request.
 */
export const login = async (data: LoginFormType) => {
    return await post("/auth/login", data);
    console.log("[data]", data);
    await fakeNetwork(1000);
    return [null, sampleAuthUserData] as SafeExecuteReturnType<unknown>;
};
