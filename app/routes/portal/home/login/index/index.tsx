import { ActionFunctionArgs, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Fragment } from "react";
import GeneralErrorBoundary from "~/components/error-boundary";
import { useNavigationState } from "~/hooks/useNavigationState";
import useSubmitData from "~/hooks/useSubmitData";
import renderFormField from "~/utils/render-form-field";
import { requireUserOrNull } from "~/utils/session.server";
import { ModalFormError } from "~/components/modal/modal-form-error";
import { Button } from "~/components/button";
import useManageLoginForm from "./manage-login-form";
import { LoginFormType } from "~/api/login/login-form-schema";
import { handleLogin } from "~/api/login/handle-login";

export const action = async ({ request }: ActionFunctionArgs) => {
    return handleLogin(request);
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const user = await requireUserOrNull(request);

    if (user) return redirect("/portal/home");
    return null;
};


const LoginForm = () => {
    const { handleSubmit, fields: formFields } = useManageLoginForm();

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
            <div className="flex justify-between items-center">
                <div>
                    <Button
                        loading={isBusy}
                        className={
                            "w-full bg-textColor text-gray-900 rounded-lg py-1.5 text-sm md:text-base md:py-2.5 md:px-4"
                        }
                    >
                        Sign in
                    </Button>
                </div>
                <div>
                    <div className="flex gap-2 md:gap-4">
                        <Link
                            className="underline text-textColor text-sm hover:opacity-90 border-none focus:ring-0"
                            to="/portal/home/signup"
                        >
                            Sign up
                        </Link>
                        <Link
                            className="focus:ring-0 underline text-textColor text-sm hover:opacity-90 border-none"
                            to="/portal/home/forgot-password"
                        >
                            Forgot Password?
                        </Link>
                    </div>
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
