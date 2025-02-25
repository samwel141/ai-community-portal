import {
    ActionFunctionArgs,
    LoaderFunctionArgs,
    redirect,
} from "@remix-run/node";
import { Fragment } from "react/jsx-runtime";
import { redirectWithSuccess } from "remix-toast";
import { changePassword } from "~/api/change-password/change-password";
import { ChangePasswordType } from "~/api/change-password/change-password-schema";
import { Button } from "~/components/button";
import  GeneralErrorBoundary  from "~/components/error-boundary";
import { useNavigationState } from "~/hooks/useNavigationState";
import useSubmitData from "~/hooks/useSubmitData";
import useManageChangePassword from "~/routes/change-password/manage-change-password";
import PasswordConstraint from "~/routes/change-password/password-constraints";
import { LoginLayout } from "~/routes/login/layout_";
import { formError } from "~/utils/from-error";
import { getRequestFormData } from "~/utils/get-request-form-data.server";
import getSearchParams from "~/utils/get-search-params.server";
import renderFormField from "~/utils/render-form-field";
import { safeRedirect } from "~/utils/request.server";
import { requireUserOrNull } from "~/utils/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
    const searchParams = getSearchParams<{
        token: string;
    }>(request);
    const token = String(searchParams.token);

    const formData = await getRequestFormData<ChangePasswordType>(request);

    const [error] = await changePassword(token, formData);
    if (error) return formError(error);

    return redirectWithSuccess("/logout", "Password Changed Successfully");
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const searchParams = getSearchParams<{
        token: string;
    }>(request);
    const token = searchParams.token;

    const user = await requireUserOrNull(request);
    if (user) return redirect("/portal");
    if (!token) return safeRedirect("/portal/voting/login");
    return null;
};

const ChangePassword = () => {
    const submit = useSubmitData();
    const { isSubmitting } = useNavigationState();
    const { handleSubmit, fields, passwordConstraints } =
        useManageChangePassword();

    const onSubmit = (formData: ChangePasswordType) => {
        submit(formData);
    };

    return (
        <LoginLayout
            title="Change Password"
            subtitle="Please input a new password to secure your privacy!"
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 w-full"
            >
                <div className={" space-y-5"}>
                    <div className={"space-y-4"}>
                        {fields.map((field) => (
                            <Fragment key={field.name}>
                                {renderFormField(field)}
                            </Fragment>
                        ))}
                    </div>
                    {passwordConstraints.map((constraint, index) => (
                        <PasswordConstraint key={index} {...constraint} />
                    ))}
                </div>
                <Button
                    loading={isSubmitting}
                    className={"w-full border border-primary font-medium"}
                >
                    Submit
                </Button>
            </form>
        </LoginLayout>
    );
};
export default ChangePassword;

export const ErrorBoundary = () => {
    return (
        <LoginLayout title="Change Password">
            <GeneralErrorBoundary />
        </LoginLayout>
    );
};
