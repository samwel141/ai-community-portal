import { ActionFunctionArgs } from "@remix-run/node";
import { useLocation } from "@remix-run/react";
import { Fragment, useState } from "react";
import { redirectWithSuccess } from "remix-toast";
import  GeneralErrorBoundary  from "~/components/error-boundary";
import { useNavigationState } from "~/hooks/useNavigationState";
import useSubmitData from "~/hooks/useSubmitData";
import { formError } from "~/utils/from-error";
import { getRequestFormData } from "~/utils/get-request-form-data.server";
import { post } from "~/utils/httpclient";
import renderFormField from "~/utils/render-form-field";
import { requireToken } from "~/utils/session.server";
import { ModalFormError } from "~/components/modal/modal-form-error";
import { Button } from "~/components/button";
import useManageLoginForm from "./manage-login-form";
import { LoginFormType } from "~/api/login/login-form-schema";

export const action = async ({ request }: ActionFunctionArgs) => {
    const token = await requireToken(request);
    const formData = await getRequestFormData<LoginFormType>(request);
    const [error] = await post("/auth/login", formData, token);
    if (error) return formError(error);

    return redirectWithSuccess(
        `/portal/home`,
        "New Adjust Reported Successfully"
    );
};

const LoginForm = () => {
    const { handleSubmit, fields:formFields } = useManageLoginForm();

    const submit = useSubmitData();
    const { isBusy } = useNavigationState();

    const onSubmit = (formData: LoginFormType) => {
        submit(formData);
    };

    return (
        <form
        onSubmit={handleSubmit(onSubmit)}
        className={"space-y-7 w-full"}
    >
        <div className={"space-y-3.5"}>
            {formFields.map((field) => (
                <Fragment key={field.name}>
                    {renderFormField(field)}
                </Fragment>
            ))}
        </div>

        <ModalFormError />
        <Button
            loading={isBusy}
            className={"w-full rounded-lg py-2.5 font-medium"}
        >
            Login
        </Button>
    </form>
    );
};
export default LoginForm;

export const ErrorBoundary = () => {
    return (
        <>
            <GeneralErrorBoundary />
        </>
    );
};
