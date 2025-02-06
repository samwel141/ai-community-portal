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

const PasteImageUrl: FC<Props> = ({ onSubmit }) => {
    const { handleSubmit, field } = useManageInsertUrlInEditorForm();

    return (
        <Tab.Panel>
            <form className={"space-y-2"} onSubmit={handleSubmit(onSubmit)}>
                {renderFormField(field)}

                <EditorPopoverFooter />
            </form>
        </Tab.Panel>
    );
};
export default PasteImageUrl;
