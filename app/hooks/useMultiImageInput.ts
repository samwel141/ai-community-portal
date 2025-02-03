import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { useUploadFile } from "~/hooks/useUploadFile";

const MAX_SIZE_IN_MB = 1;

/**
 * Validates the file size of a given file.
 */
const fileSizeValidator = (file: File) => {
    const fileSizeInMb = file.size / (1024 * 1024);
    if (fileSizeInMb > MAX_SIZE_IN_MB) {
        return {
            code: "file size too big",
            message: `File size exceeds ${MAX_SIZE_IN_MB} MB.`,
        };
    }
    return null;
};

export const useHandleMultiImageInput = (
    onChange?: (urls: string[]) => void,
    imageUrls?: string[]
) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
    const {
        upload,
        isUploading: isFileUploading,
        error,
        data,
    } = useUploadFile();
    const [uploadingFileIndex, setUploadingFileIndex] = useState<number | null>(
        null
    );

    const handleFilesChange = (files: File[]) => {
        const validFiles: File[] = files.filter((file) => {
            const validation = fileSizeValidator(file);
            if (validation) {
                toast.error(validation.message);
                return false;
            }
            return true;
        });

        setSelectedFiles((prev) => [...prev, ...validFiles]);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;

        const newFiles = Array.from(e.target.files);
        if (imageUrls && imageUrls?.length > 5) {
            toast.error("You can only upload up to 5 images.");
            return;
        }
        handleFilesChange(newFiles);
    };

    useEffect(() => {
        const uploadFiles = async () => {
            for (let i = 0; i < selectedFiles.length; i++) {
                const file = selectedFiles[i];
                setUploadingFileIndex(uploadedUrls?.length);
                upload(file);
            }
            setSelectedFiles([]);
        };

        if (selectedFiles.length) {
            uploadFiles();
        }
    }, [selectedFiles, upload, isFileUploading]);

    useEffect(() => {
        if (!isFileUploading && data?.url) {
            setUploadedUrls((prev) => [...prev, data.url]);
            setUploadingFileIndex(null);
        }
    }, [data, isFileUploading]);

    useEffect(() => {
        if (error) {
            toast.error("Error uploading file.");
        }
    }, [error]);

    useEffect(() => {
        if (onChange) {
            onChange([...(imageUrls || []), ...uploadedUrls]);
        }
    }, [uploadedUrls, imageUrls, onChange]);

    return {
        selectedFiles,
        uploadedUrls,
        isUploading: isFileUploading || uploadingFileIndex !== null,
        handleInputChange,
        setUploadedUrls,
        setSelectedFiles,
        uploadingFileIndex,
    };
};
