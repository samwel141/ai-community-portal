import { useCallback } from "react";
import { toast } from "sonner";

function fallbackCopy(value: string) {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    document.body.appendChild(textArea);

    textArea.select();

    document.execCommand("copy");
    toast.success("Copied to clipboard");

    document.body.removeChild(textArea);
}

export const useCopyToClipboard = (): ((value: string) => Promise<void>) => {
    return useCallback(async (value: string) => {
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(value);
                toast.success("Copied to clipboard");
            } else {
                fallbackCopy(value);
            }
        } catch (e) {
            fallbackCopy(value);
        }
    }, []);
};
