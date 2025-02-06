import { FC, ReactNode, useState } from "react";
import Popover from "~/components/popover";
import {
    InsertEditorLinkFormType,
    useManageInsertUrlInEditorForm,
} from "~/components/tip-tap-editor/manage-insert-link-in-editor-form";
import renderFormField from "~/utils/render-form-field";

interface Props {
    onSubmit: (formData: InsertEditorLinkFormType) => void;
    trigger: ReactNode;
    defaultUrl?: string;
}

const InsertEditorUrlForm: FC<Props> = ({
    onSubmit: _handleFormSubmit,
    trigger,
    defaultUrl,
}) => {
    const [openPopover, setOpenPopover] = useState(false);

    const { resetForm, handleSubmit, field } =
        useManageInsertUrlInEditorForm(defaultUrl);

    const handlePopoverOpenChange = () => {
        resetForm();
        setOpenPopover(!openPopover);
    };

    const onSubmit = (formData: InsertEditorLinkFormType) => {
        setOpenPopover(false);
        _handleFormSubmit(formData);
    };

    return (
        <Popover open={openPopover} onOpenChange={handlePopoverOpenChange}>
            <Popover.Trigger>{trigger}</Popover.Trigger>

            <Popover.Content>
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
export default InsertEditorUrlForm;
