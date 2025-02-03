import { XMarkIcon } from "@heroicons/react/24/outline";
import type { FC, MouseEvent } from "react";
import { LoadingCircle } from "~/components/icons";
import { cn } from "~/utils";

const MAX_SIZE_IN_MB = 1;

export const CardText: FC = () => (
    <div className={"text-sm space-y-1"}>
        <p className={"font-medium"}>
            <span className={"pr-1 text-primary"}>Click to upload</span>
            <span>or drag and drop</span>
        </p>
        <p className={"text-xs text-muted"}>
            SVG, PNG, JPG or GIF (max. {MAX_SIZE_IN_MB} MB)
        </p>
    </div>
);
export const UploadingFileLoading: FC = () => (
    <div
        className={cn(
            "center absolute bg-black/30 inset-0 rounded-xl backdrop-blur-sm"
        )}
    >
        <LoadingCircle className={"size-4 text-white"} />
    </div>
);

export const RemoveUploadedFile: FC<{ onClick: VoidFunction }> = ({
    onClick,
}) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
    };

    return (
        <button
            type="button"
            className="absolute center inset-0 p-1 bg-black/30 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100"
            onClick={handleClick}
        >
            <XMarkIcon className="h-5 w-5 text-white" />
        </button>
    );
};
