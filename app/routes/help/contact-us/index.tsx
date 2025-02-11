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
import SocialLinks from "~/components/social-links";

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
        <div className="md:mt-[8rem] md:mb-[8rem]">
            <h1 className="pl-6 text-xl text-accent font-bold md:pl-[30%] md:pb-2">Get in Touch</h1>
            <div className="flex flex-col md:flex-row justify-center align-center items-center w-[90%] md:w-[50%] md:max-w-5xl mx-auto gap-6 md:gap-12">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-7 w-full md:w-1/2"
                >

                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                        {formFields.slice(0, 2).map((field) => (
                            <Fragment key={field.name}>
                                {renderFormField(field)}
                            </Fragment>
                        ))}
                    </div>
                    <div className="w-full sm:grid-cols-2 gap-4">
                        {formFields.slice(2).map((field) => (
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

                <div className="flex flex-col w-full mb-12 md:w-1/3 ml-1 md:ml-[6rem] text-textColor justify-center md:justify-start align-center md:align-start items-center md:items-start">
                    <h1 className="font-[400] text-lg mt-8 md:mt-10 md:text-xl text-textColor sm:text-base">
                        ADDRESS
                    </h1>
                    <div className="text-center md:text-left">
                        <p>Sahara Ventures</p>
                        <p>Victoria Noble Center, 4<sup>th</sup> Floor Office No. 46</p>
                        <p>New Bagamoyo Road</p>
                        <p>Dar es Salaam, Tanzania</p>
                    </div>
                    <div className="mt-6">
                        <pre className="whitespace-pre-wrap">
                            <p>EMAIL ADDRESS</p>
                            <p>communication@ai-or-tz</p>
                        </pre>
                    </div>
                    <div className="mt-6">
                        <p>FIND US</p>
                     <SocialLinks />
                    </div>
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
