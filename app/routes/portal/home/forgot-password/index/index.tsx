import { ActionFunctionArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Fragment } from "react";
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
import useManageLoginForm, { ForgotPasswordFormType } from "./manage-login-form";
import { LoginFormType } from "~/api/login/login-form-schema";
import useManageForgotPasswordForm from "./manage-login-form";

export const action = async ({ request }: ActionFunctionArgs) => {
    const token = await requireToken(request);
    const formData = await getRequestFormData<LoginFormType>(request);
    
    const [error] = await post("/auth/forgot-password", formData, token);
    if (error) return formError(error);

    return redirectWithSuccess(
        `/portal/home`,
        "Get Password from your Email Successfully"
    );
};

const LoginForm = () => {
    const { handleSubmit, formFields } = useManageForgotPasswordForm();

    const submit = useSubmitData();
    const { isBusy } = useNavigationState();

    const onSubmit = (formData: ForgotPasswordFormType) => {
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
            <div className="flex justify-between items-center">
                <div>
                    <Button
                        loading={isBusy}
                        className={
                            "w-full bg-textColor text-gray-900 rounded-lg py-1.5 text-sm md:text-base md:py-2.5 md:px-4"
                        }
                    >
                        Submit
                    </Button>
                </div>
                <div>
                  
                </div>
            </div>
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
