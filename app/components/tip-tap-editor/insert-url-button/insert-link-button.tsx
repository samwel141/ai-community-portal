import { useCurrentEditor } from "@tiptap/react";
import { useState } from "react";

import { ButtonIcon } from "~/components/button";
import Popover from "~/components/popover";
import { LinkIcon } from "~/components/tip-tap-editor/editor-icons";
import {
    InsertEditorLinkFormType,
    useManageInsertUrlInEditorForm,
} from "~/components/tip-tap-editor/manage-insert-link-in-editor-form";
import { cn } from "~/utils";
import renderFormField from "~/utils/render-form-field";

const InsertLinkButton = () => {
    const { editor } = useCurrentEditor();
    const [openPopover, setOpenPopover] = useState(false);
    const { handleSubmit, field, resetForm } = useManageInsertUrlInEditorForm();

    if (!editor) {
        return null;
    }

    const handlePopoverOpenChange = () => {
        resetForm();
        setOpenPopover(!openPopover);
    };

    const onSubmit = ({ url }: InsertEditorLinkFormType) => {
        editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: url })
            .run();
    };

    return (
        <Popover open={openPopover} onOpenChange={handlePopoverOpenChange}>
            <Popover.Trigger>
                <ButtonIcon
                    Icon={LinkIcon}
                    className={cn("text-dark-green rounded-md ")}
                />
            </Popover.Trigger>

            <Popover.Content className={"w-80"}>
                <form className={"space-y-2"} onSubmit={handleSubmit(onSubmit)}>
                    {renderFormField({
                        ...field,
                        label: "Past Url",
                        placeholder: "https://www.example.com/sample",
                    })}

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
export default InsertLinkButton;
