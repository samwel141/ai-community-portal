import { Tab } from "@headlessui/react";
import { useCurrentEditor } from "@tiptap/react";
import { useState } from "react";

import { ButtonIcon } from "~/components/button";
import Popover from "~/components/popover";
import { ImageIcon } from "~/components/tip-tap-editor/editor-icons";
import PasteImageUrl from "~/components/tip-tap-editor/insert-image-button/paste-image-url";
import { EditorPopoverTabHeaders } from "~/components/tip-tap-editor/insert-image-button/popover-tab";
import UploadImageFromLocal from "~/components/tip-tap-editor/insert-image-button/upload-image-from-local";
import { InsertEditorLinkFormType } from "~/components/tip-tap-editor/manage-insert-link-in-editor-form";
import { cn } from "~/utils";

const InsertImageButton = () => {
    const [openPopover, setOpenPopover] = useState(false);
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    const handlePopoverOpenChange = () => {
        setOpenPopover(!openPopover);
    };

    const handleSubmit = ({ url }: InsertEditorLinkFormType) => {
        setOpenPopover(false);
        editor.chain().focus().setImage({ src: url }).run();
    };

    return (
        <Popover open={openPopover} onOpenChange={handlePopoverOpenChange}>
            <Popover.Trigger>
                <ButtonIcon
                    Icon={ImageIcon}
                    className={cn("text-dark-green rounded-md ")}
                />
            </Popover.Trigger>

            <Popover.Content className={"w-96 p-0 pt-2"}>
                <Tab.Group>
                    <EditorPopoverTabHeaders />

                    <Tab.Panels className={"p-4 bg-gray-50"}>
                        <PasteImageUrl onSubmit={handleSubmit} />
                        <UploadImageFromLocal onSubmit={handleSubmit} />
                    </Tab.Panels>
                </Tab.Group>
            </Popover.Content>
        </Popover>
    );
};
export default InsertImageButton;
