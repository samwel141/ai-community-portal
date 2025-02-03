import { useFetcher } from "@remix-run/react";
import { UploadFileType } from "~/api/upload-file";
import { SafeExecuteReturnType } from "~/utils/safe-excute.server";

export const useUploadFile = () => {
    const uploadFileFetcher =
        useFetcher<SafeExecuteReturnType<UploadFileType>>();
    const isUploading = uploadFileFetcher.state !== "idle";

    const upload = (file: File) => {
        const formData = new FormData();
        formData.append("file", file);

        uploadFileFetcher.submit(formData, {
            method: "post",
            action: "/upload-file",
            encType: "multipart/form-data",
        });
    };

    const uploadFileData = uploadFileFetcher.data ?? [null, null];
    const [error, resultData] = uploadFileData;
    const data = resultData?.data;

    return {
        upload,
        isUploading,
        error,
        data,
    };
};
