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
import useManageContactForm, { ContactFormType } from "~/routes/help/contact-us/manage-contact-form";

export const action = async ({ request }: ActionFunctionArgs) => {
    const token = await requireToken(request);
    const formData = await getRequestFormData<ContactFormType>(request);
    const [error] = await post("/auth/login", formData, token);
    if (error) return formError(error);

    return redirectWithSuccess(
        `/portal/home`,
        "New Adjust Reported Successfully"
    );
};

const ContactForm = () => {
    const { handleSubmit, fields: formFields } = useManageContactForm();

    const submit = useSubmitData();
    const { isBusy } = useNavigationState();

    const onSubmit = (formData: ContactFormType) => {
        submit(formData);
    };

    return (
        <div className="flex flex-row justify-center align-center items-center md:flex-row   w-[50%] max-w-5xl mx-auto gap-6">
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-7 w-1/2 md:w-3/4"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {formFields.map((field) => (
                    <Fragment key={field.name}>
                        {renderFormField(field)}
                    </Fragment>
                ))}
            </div>
    
            <ModalFormError />
            <div className="flex justify-between items-center">
                <Button
                    loading={isBusy}
                    className="w-full bg-textColor text-gray-900 rounded-lg py-2.5 text-sm"
                >
                    Send Message
                </Button>
            </div>
        </form>
    
        {/* Contact Section - Takes 25% */}
        <div className="flex flex-col md:w-1/4 text-textColor">
            <h1 className="font-bold text-lg md:text-xl text-textColor sm:text-base">
               ADDRESS
            </h1>
            <pre className="whitespace-pre-wrap">
               <p>Sahara Ventures</p>
               <p>Vctoria Noble Center, 4<sup>th</sup> Floor Office No. 46</p>
               <p>New Bagamoyo Road</p>
               <p>Dar es salaam Tanzania</p>
            </pre>
            <div className="mt-6">
                <pre className="whitespace-pre-wrap">
                    <p>EMAIL ADDRESS</p>
                    <p>communication@ai-or-tz</p>
                </pre>
            </div>
            <div className="mt-6">
                <p>FIND US</p>

            </div>
        </div>
    </div>
    
    
    );
};
export default ContactForm;

export const ErrorBoundary = () => {
    return (
        <>
            <GeneralErrorBoundary />
        </>
    );
};
