import { ActionFunctionArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Fragment, useState } from "react";
import { redirectWithSuccess } from "remix-toast";
import { Tag } from "react-tag-input";
import GeneralErrorBoundary from "~/components/error-boundary";
import { useNavigationState } from "~/hooks/useNavigationState";
import useSubmitData from "~/hooks/useSubmitData";
import { formError } from "~/utils/from-error";
import { getRequestFormData } from "~/utils/get-request-form-data.server";
import { post } from "~/utils/httpclient";
import renderFormField from "~/utils/render-form-field";
import { requireToken } from "~/utils/session.server";
import { ModalFormError } from "~/components/modal/modal-form-error";
import { Button } from "~/components/button";
import useManageNewPostForm, { NewPostFormType } from "~/routes/portal/posts/new/index/manage-new-post-form";
import TagInput from "~/components/tag-input";

export const action = async ({ request }: ActionFunctionArgs) => {
    const token = await requireToken(request);

    const formData = await getRequestFormData<NewPostFormType>(request);
    const [error] = await post("/api/post/", formData, token);
    if (error) return formError(error);

    return redirectWithSuccess(
        `${BASE_URL}`,
        "New post created Successfully"
    );
};


const NewPostForm = () => {
    const { handleSubmit, fields: formFields } = useManageNewPostForm();

    const submit = useSubmitData();
    const { isBusy } = useNavigationState();

    const onSubmit = (formData: NewPostFormType) => {
        submit(formData);
    };

    const [selectedTags, setSelectedTags] = useState<Tag[]>([
        {
            id: "React", text: "React",
            className: ""
        },
        {
            id: "Vue", text: "Vue",
            className: ""
        },
      ]);

      console.log(["+=============Tags"],selectedTags);
      

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={"space-y-4 w-full"}
        >
            <div className={"space-y-4"}>
                {formFields.slice(0, 4).map((field) => (
                    <Fragment key={field.name}>
                        {renderFormField(field)}
                    </Fragment>
                ))}
            </div>
            {/* <div>
      <h2>Tag Input Example</h2>
      <TagInput defaultTags={selectedTags} onChange={setSelectedTags} />
      <p>Selected Tags: {selectedTags.map((tag) => tag.text).join(", ")}</p>
    </div> */}
            <div className={"space-y-2"}>
                {formFields.slice(4).map((field) => (
                    <Fragment key={field.name}>
                        {renderFormField(field)}
                    </Fragment>
                ))}
            </div>

            <ModalFormError />
            <div className="flex justify-between items-center pt-8">
                <div>
                    <Button
                        type="button"
                        className={"w-full bg-textColor text-gray-900 rounded-lg py-2 text-sm"}
                        onClick={() => window.history.back()}
                    >
                        Cancel
                    </Button>
                </div>
                <div>
                    <div className="flex gap-4">
                        <Button
                          loading={isBusy}
                              className={"w-full bg-accent text-textColor rounded-lg py-2 text-sm"}
                        >
                           Post
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default NewPostForm;

export const ErrorBoundary = () => {
    return (
        <>
            <GeneralErrorBoundary />
        </>
    );
};

