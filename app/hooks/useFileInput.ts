import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

const MAX_SIZE_IN_MB = 1;

/**
 * Calculates the file size in either Megabytes (MB) or Kilobytes (KB).
 *
 * @param {Object} file - The file object.
 * @param {number} file.size - The size of the file in bytes.
 *
 * @returns {Array} - An array with the unit of the file size ("MB" or "KB")
 *                    and the calculated file size value.
 */
export const getFileSize = ({ size: bytes }: File): ["MB" | "KB", number] => {
    const fileSizeInMb: number = Math.round(bytes / 1024 / 1024);
    const fileSizeInKb: number = Math.round(bytes / 1024);

    if (fileSizeInMb < 1) {
        return ["KB", fileSizeInKb];
    }
    return ["MB", fileSizeInMb];
};

/**
 * Validates the file size of a given file.
 *
 * @param {File} file - The file to be validated.
 * @returns {object|null} - An object with code and message properties if the file size is too big, otherwise null.
 */
const fileSizeValidator = (file: File) => {
    const [unit, size] = getFileSize(file);
    if (unit === "MB" && size > MAX_SIZE_IN_MB) {
        return {
            code: "file size is too big",
            message: `File size is larger than ${MAX_SIZE_IN_MB} MB`,
        };
    }
    return null;
};

interface UseFileUpload {
    onChange?: (file: File) => void;
}

export const useHandleFileInput = ({ onChange }: UseFileUpload) => {
    const [selectedFile, setSelectedFile] = useState<File | undefined>();

    const updateSelectedFile = (file: File) => {
        const isValidFileSize = fileSizeValidator(file);

        if (!isValidFileSize) {
            setSelectedFile(file);
            onChange?.(file);
            return;
        }
        toast.error(`file size it too big max ${MAX_SIZE_IN_MB}`);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            updateSelectedFile(e.target.files[0]);
        }
    };

    return {
        handleInputChange,
        selectedFile,
        setSelectedFile,
        updateSelectedFile,
    };
};
