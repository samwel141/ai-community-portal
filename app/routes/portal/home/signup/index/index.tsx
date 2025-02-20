import { ActionFunctionArgs } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";
import { Fragment, useState } from "react";
import { redirectWithSuccess } from "remix-toast";
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
import GoogleButton from "~/components/google-button";
import { toast } from "sonner";
import useManageSignUpForm, {SignUpFormType} from "~/routes/portal/home/signup/index/manage-sigup-form";

export const action = async ({ request }: ActionFunctionArgs) => {

    const formData = await getRequestFormData<SignUpFormType>(request);
    const [error] = await post("/profile/signup/", formData);
    if (error) return formError(error);

    return redirectWithSuccess(
        `/portal/home/login`,
        "Registered Successfully"
    );
};

const SignUpForm = () => {
    const { handleSubmit, fields: formFields } = useManageSignUpForm();

    const submit = useSubmitData();
    const { isBusy } = useNavigationState();

    const onSubmit = (formData: SignUpFormType) => {
        submit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={"space-y-4 w-full"}
        >
            <div className={"grid grid-cols-2 gap-4"}>
                {formFields.slice(0, 4).map((field) => (
                    <Fragment key={field.name}>
                        {renderFormField(field)}
                    </Fragment>
                ))}
            </div>
            <div className={"space-y-2"}>
                {formFields.slice(4).map((field) => (
                    <Fragment key={field.name}>
                        {renderFormField(field)}
                    </Fragment>
                ))}
            </div>

            <ModalFormError />
            <div className="flex justify-between items-center">
                <div>
                    <Button
                        loading={isBusy}
                        className={"w-full bg-textColor text-gray-900 rounded-lg py-2 text-sm"}
                    >
                        Sign Up
                    </Button>
                </div>
                <div>
                    <div className="flex gap-4">
                        <Link
                            className="focus:ring-0 text-underline text-textColor text-xs hover:opacity-90 border-none underline"
                            to=""
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <GoogleButton onClick={function (): void {
                    toast.error("Function not implemented.");
                } } />
            </div>
        </form>
    );
};
export default SignUpForm;

export const ErrorBoundary = () => {
    return (
        <>
            <GeneralErrorBoundary />
        </>
    );
};

