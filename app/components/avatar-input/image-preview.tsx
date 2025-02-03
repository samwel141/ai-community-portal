import { FutureAvatar } from "~/components/avatar";
import { useAvatarProfileInput } from "~/components/avatar-input/avatar-input";
import {
    RemoveUploadedFile,
    UploadingFileLoading,
} from "~/components/avatar-input/card-text";
import { PhotoAddIcon } from "~/components/icons";

export const ImagePreview = () => {
    const { imageUrl, isUploading, selectedFile, setSelectedFile } =
        useAvatarProfileInput();

    return (
        <FutureAvatar
            className={
                "size-12 bg-transparent group p-0 relative overflow-hidden"
            }
        >
            {imageUrl ? (
                <FutureAvatar.Image
                    src={imageUrl}
                    className={"object-cover size-full"}
                    alt={"employee profile"}
                />
            ) : (
                <FutureAvatar.Icon
                    Icon={PhotoAddIcon}
                    className={"size-9 text-dark-green"}
                />
            )}
            {isUploading && <UploadingFileLoading />}
            {selectedFile && !isUploading && (
                <RemoveUploadedFile
                    onClick={() => setSelectedFile(undefined)}
                />
            )}
        </FutureAvatar>
    );
};
