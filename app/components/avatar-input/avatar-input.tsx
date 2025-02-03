import {
    type ChangeEvent,
    createContext,
    type Dispatch,
    type FC,
    useContext,
    useEffect,
} from "react";
import { CardText } from "~/components/avatar-input/card-text";
import { ImagePreview } from "~/components/avatar-input/image-preview";
import Card from "~/components/card";
import { FieldContainer } from "~/components/form-controls/common";
import Label from "~/components/form-controls/label";
import { useHandleFileInput } from "~/hooks/useFileInput";
import { useUploadFile } from "~/hooks/useUploadFile";
import { cn } from "~/utils";

export interface AvatarInputProps {
    className?: string;
    labelClassName?: string;
    label: string;
    hasError?: boolean;
    onChange?: (url: string) => void;
    defaultValue?: string;
    innerWrapperClassName?: string;
}

interface AvatarInputContextType
    extends Omit<AvatarInputProps, "onChange" | "defaultValue"> {
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    selectedFile?: File;
    setSelectedFile: Dispatch<File | undefined>;
    isUploading: boolean;
    imageUrl: string;
}

const AvatarInputContext = createContext<AvatarInputContextType | undefined>(
    undefined
);

const AvatarInput: FC<AvatarInputProps> = ({
    onChange,
    defaultValue,
    label,
    className,
    labelClassName,
    hasError,
    innerWrapperClassName,
}) => {
    const { upload, isUploading, data } = useUploadFile();
    const { handleInputChange, selectedFile, setSelectedFile } =
        useHandleFileInput({
            onChange: upload,
        });

    useEffect(() => {
        if (data && onChange) {
            onChange(data.url);
        }
    }, [data, onChange]);

    const imageUrl = selectedFile
        ? URL.createObjectURL(selectedFile)
        : defaultValue || "";

    const value = {
        handleInputChange,
        selectedFile,
        setSelectedFile,
        isUploading,
        imageUrl,
        label,
        labelClassName,
        className,
    };

    return (
        <AvatarInputContext.Provider value={value}>
            <FieldContainer className={className}>
                <Label className={cn("pb-1.5", labelClassName)} label={label} />

                <label
                    htmlFor="file"
                    className={cn("w-full flex-1", {
                        "pointer-events-none": isUploading,
                    })}
                >
                    <input
                        onChange={handleInputChange}
                        id="file"
                        type="file"
                        hidden
                        accept="image/*"
                    />
                    <Card
                        className={cn(
                            "relative gap-3 flex items-center bg-white cursor-pointer space-y-1 rounded-xl p-2 font-light text-gray-600 hover:bg-gray-50",
                            innerWrapperClassName,
                            { "bg-gray-100": isUploading },
                            { "border-red-500": hasError }
                        )}
                    >
                        <ImagePreview />
                        <CardText />
                    </Card>
                </label>
            </FieldContainer>
        </AvatarInputContext.Provider>
    );
};

export const useAvatarProfileInput = (): AvatarInputContextType => {
    const context = useContext(AvatarInputContext);

    if (!context) {
        throw new Error(
            "useUploadProfile must be used within an UploadProfileProvider"
        );
    }
    return context;
};

export default AvatarInput;
