import { FC } from "react";
import Button from "~/components/button/button";
import { useModalContext } from "~/components/modal/modal";
import { cn } from "~/utils";

interface ModalFooterProps {
    saveBtnLabel?: string;
    className?: string;
    loading?: boolean;
    onCancel?: () => void;
    cancelBtnLabel?: string;
    disabled?: boolean;
    onSave?: () => void;
}

export const ModalFooter: FC<ModalFooterProps> = ({
    saveBtnLabel,
    className,
    loading,
    onCancel,
    cancelBtnLabel,
    disabled,
    onSave: handleSave,
}) => {
    const { onClose: setOpen } = useModalContext();

    const handleOnClick = () => {
        if (onCancel) onCancel();
        else setOpen(false);
    };
    return (
        <footer
            className={cn(
                "flex items-center  justify-end gap-5 px-6 pt-8",
                className
            )}
        >
            <Button
                type={"button"}
                onClick={handleOnClick}
                className={
                    " border border-swiss-coffee bg-white font-medium text-primary-950 px-8 focus:ring-gray-500/60 active:ring-gray-500/60"
                }
            >
                {cancelBtnLabel ?? "Cancel"}
            </Button>

            <Button
                disabled={disabled}
                onClick={handleSave}
                loading={loading}
                className={
                    "border border-primary font-medium disabled:cursor-not-allowed px-8 disabled:opacity-50"
                }
            >
                {saveBtnLabel ?? "Save"}
            </Button>
        </footer>
    );
};
