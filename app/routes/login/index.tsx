import {
    ActionFunctionArgs,
    LoaderFunctionArgs,
    MetaFunction,
    redirect,
} from "@remix-run/node";
import { Fragment } from "react";
import { LoginFormType } from "~/api/login/login-form-schema";
import { Button } from "~/components/button";
import  GeneralErrorBoundary  from "~/components/error-boundary";
import { ModalFormError } from "~/components/modal/modal-form-error";
import { useNavigationState } from "~/hooks/useNavigationState";
import useSubmitData from "~/hooks/useSubmitData";
import { handleLogin } from "~/routes/login/handle-login";
import { LoginLayout } from "~/routes/login/layout_";
import useManageLoginForm from "~/routes/login/manage-login-form";
import renderFormField from "~/utils/render-form-field";
import { requireUserOrNull } from "~/utils/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
    return handleLogin(request);
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const user = await requireUserOrNull(request);

    if (user) return redirect("/dashboard");
    return null;
};

export const meta: MetaFunction = () => {
    return [
        { title: "TZ AI Community - Login" },
        {
            name: "description",
            content: "Log in to your account.",
        },
    ];
};

const Login = () => {
    const { handleSubmit, fields } = useManageLoginForm();

    const submit = useSubmitData();
    const { isBusy } = useNavigationState();

    const onSubmit = (formData: LoginFormType) => {
        submit(formData);
    };

    return (
        <LoginLayout
            title="Log in"
            subtitle="Please enter your registered email and password below to login."
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={"space-y-7 w-full"}
            >
                <div className={"space-y-3.5"}>
                    {fields.map((field) => (
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
        </LoginLayout>
    );
};

export default Login;

export const ErrorBoundary = () => {
    return (
        <LoginLayout title="Log in">
            <GeneralErrorBoundary
                // className={"h-auto w-full  bg-gray-50 py-4 px-10 rounded-lg"}
            />
        </LoginLayout>
    );
};
