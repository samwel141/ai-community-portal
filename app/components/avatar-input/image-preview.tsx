import { FutureAvatar } from "~/components/avatar";
import { useAvatarProfileInput } from "~/components/avatar-input/avatar-input";
import {
    RemoveUploadedFile,
    UploadingFileLoading,
} from "~/components/avatar-input/card-text";
import { PhotoAddIcon, PlusIcon } from "~/components/icons";

export const ImagePreview = () => {
    const { imageUrl, isUploading, selectedFile, setSelectedFile } =
        useAvatarProfileInput();

    return (
        <FutureAvatar
            className={
                "h-full w-full bg-transparent rounded-none group p-0 relative overflow-hidden"
            }
        >
            {imageUrl ? (
                <FutureAvatar.Image
                    src={imageUrl}
                    className={"object-cover size-full"}
                    alt={"employee profile"}
                />
            ) : (
               <button
                className="flex gap-2 items-center bg-gray-500 p-1 text-textColor border border-textColor"
                >
                 <PlusIcon className="h-5 w-5 text-white" />
                 <p>Upload image</p>
               </button>
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
