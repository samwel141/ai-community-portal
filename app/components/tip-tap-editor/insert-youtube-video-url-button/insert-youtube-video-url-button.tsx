import { useCurrentEditor } from "@tiptap/react";
import { useState } from "react";

import { ButtonIcon } from "~/components/button";
import Popover from "~/components/popover";
import { VideoIcon } from "~/components/tip-tap-editor/editor-icons";
import { useManageInsertYoutubeVideoUrlInEditorForm } from "~/components/tip-tap-editor/insert-youtube-video-url-button/manage-insert-youtube-video-url-in-editor-form";
import { InsertEditorLinkFormType } from "~/components/tip-tap-editor/manage-insert-link-in-editor-form";
import { cn } from "~/utils";
import renderFormField from "~/utils/render-form-field";

const InsertYoutubeVideoUrlButton = () => {
    const [openPopover, setOpenPopover] = useState(false);
    const { editor } = useCurrentEditor();

    const { handleSubmit, field, resetForm } =
        useManageInsertYoutubeVideoUrlInEditorForm();

    if (!editor) {
        return null;
    }

    const handlePopoverOpenChange = () => {
        resetForm();
        setOpenPopover(!openPopover);
    };

    const onSubmit = ({ url }: InsertEditorLinkFormType) => {
        setOpenPopover(false);
        editor.commands.setYoutubeVideo({
            src: url,
        });
    };

    return (
        <Popover open={openPopover} onOpenChange={handlePopoverOpenChange}>
            <Popover.Trigger>
                <ButtonIcon
                    Icon={VideoIcon}
                    className={cn("text-dark-green rounded-md ")}
                />
            </Popover.Trigger>

            <Popover.Content className={"w-80"}>
                <form className={"space-y-2"} onSubmit={handleSubmit(onSubmit)}>
                    {renderFormField(field)}

                    <div className={"flex justify-end"}>
                        <button
                            className={
                                "text-sm w-fit text-blue-500 font-medium"
                            }
                        >
                            Okay
                        </button>
                    </div>
                </form>
            </Popover.Content>
        </Popover>
    );
};
export default InsertYoutubeVideoUrlButton;
