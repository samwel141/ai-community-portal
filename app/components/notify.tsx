import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { toast as notify, Toaster } from "sonner";

const Notify = () => {
    const { toast } = useLoaderData<{ toast: { type: "error" | "success"; message: string } }>();

    useEffect(() => {
        if (toast?.type === "error") {
            notify.error(toast.message);
        }
        if (toast?.type === "success") {
            notify.success(toast.message);
        }
    }, [toast]);
    return (
        <Toaster
            position={"top-center"}
            icons={{
                success: <CheckCircleIcon className={"text-green-500"} />,
                error: <XCircleIcon className={"text-red-500"} />,
            }}
        />
    );
};
export default Notify;
