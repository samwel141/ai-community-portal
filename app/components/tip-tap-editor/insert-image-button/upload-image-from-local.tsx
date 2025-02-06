import { Tab } from "@headlessui/react";
import { FC } from "react";
import EditorPopoverFooter from "~/components/tip-tap-editor/editor-popover-footer";
import {
    InsertEditorLinkFormType,
    useManageInsertUrlInEditorForm,
} from "~/components/tip-tap-editor/manage-insert-link-in-editor-form";
import renderFormField from "~/utils/render-form-field";

interface Props {
    onSubmit: (formData: InsertEditorLinkFormType) => void;
}

const UploadImageFromLocal: FC<Props> = ({ onSubmit }) => {
    const { handleSubmit, field, control } = useManageInsertUrlInEditorForm();

    return (
        <Tab.Panel className={"space-y-4"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {renderFormField({
                    ...field,
                    control,
                    inputType: "avatar-input",
                    className: "border-none",
                    innerWrapperClassName: "bg-transparent border-transparent",
                })}

                <EditorPopoverFooter />
            </form>
        </Tab.Panel>
    );
};
export default UploadImageFromLocal;
