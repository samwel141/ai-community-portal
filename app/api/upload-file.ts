import { z } from "zod";
import { post } from "~/utils/httpclient";
import type { SafeExecuteReturnType } from "~/utils/safe-execute.server"; //--------------------------------------------------------------
 //--------------------------------------------------------------

//--------------------------------------------------------------
export const UploadFileSchema = z.object({
    data: z.object({
        url: z.string(),
        name: z.string().optional(),
    }),
});

export type UploadFileType = z.infer<typeof UploadFileSchema>;

//--------------------------------------------------------------

/**
 * Uploads a file to the server.
 *
 * @param {File} file - The file to upload.
 * @param {string} token - The access token used for authentication.
 * @returns  A Promise that resolves to the uploaded file response.
 */
export const uploadFile = async (file: File, token: string) => {
    const formData = new FormData();
    formData.append("file", file);

    return (await post(
        "/users/media",
        formData,
        token
    )) as SafeExecuteReturnType<UploadFileType>;
};
