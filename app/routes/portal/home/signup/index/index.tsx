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
import useManageLoginForm from "./manage-sigup-form";
import { LoginFormType } from "~/api/login/login-form-schema";

export const action = async ({ request }: ActionFunctionArgs) => {
    const token = await requireToken(request);
    const formData = await getRequestFormData<LoginFormType>(request);
    const [error] = await post("/auth/signup", formData, token);
    if (error) return formError(error);

    return redirectWithSuccess(
        `/portal/home/login`,
        "Registered Successfully"
    );
};

const SignUpForm = () => {
    const { handleSubmit, fields: formFields } = useManageLoginForm();

    const submit = useSubmitData();
    const { isBusy } = useNavigationState();

    const onSubmit = (formData: LoginFormType) => {
        console.log(formData);
        // submit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={"space-y-7 w-full"}
        >
            <div className={"space-y-2"}>
                {formFields.map((field) => (
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
                        className={"w-full bg-textColor text-gray-900 rounded-lg py-2.5 text-sm"}
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
