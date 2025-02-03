import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useActionData } from "@remix-run/react";
import { FC } from "react";
import Hide from "~/components/hide";
import { FormErrorType } from "~/types";
import { cn } from "~/utils";

export const ModalFormError: FC<{ className?: string }> = ({ className }) => {
    const actionData = useActionData<FormErrorType>();
    return (
        <Hide condition={!actionData}>
            <div
                className={cn(
                    "center gap-2 rounded-md bg-red-500/25 border border-red-500/80 mt-3 p-2 pl-3 text-red-900",
                    className
                )}
            >
                <ExclamationTriangleIcon
                    strokeWidth={2}
                    className={"mt-0.5 size-4 shrink-0"}
                />
                <p className={"text-sm/none"}>
                    {actionData?.errorMessage} An error hase been occurred
                </p>
            </div>
        </Hide>
    );
};
