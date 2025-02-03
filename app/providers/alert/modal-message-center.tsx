import {
    CheckIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import React, { type FC, type ReactNode } from "react";

import Modal from "~/components/modal";
import useOpenAndCloseModal from "~/hooks/useRouteModal";

export interface IModalMessageCenter {
    actions: ReactNode;
    appendTo?: React.RefObject<Element>;
    message: ReactNode;
    onClose: () => void;
    size: string;
    title: string;
    type: "success" | "info" | "warning" | "danger";
}

export const getIconAndColor = (
    type: "success" | "info" | "warning" | "danger" | "default"
) => {
    switch (type) {
        case "danger": {
            return {
                icon: (
                    <ExclamationTriangleIcon
                        className={"h-6 w-6 text-red-600"}
                    />
                ),
                buttonClass: "bg-red-500 text-red-100",
                iconWrapperClass: "bg-red-100 text-red-600 ",
            };
        }
        case "warning": {
            return {
                icon: (
                    <ExclamationTriangleIcon
                        className={"h-6 w-6 text-orange-600"}
                    />
                ),
                buttonClass: "bg-orange-500 text-orange-100 ",
                iconWrapperClass: "bg-orange-100 text-orange-600 ",
            };
        }
        case "success": {
            return {
                icon: <CheckIcon className={"h-6 w-6 text-green-600"} />,
                buttonClass: "bg-green-500 text-green-100",
                iconWrapperClass: "bg-green-100 text-green-600 ",
            };
        }

        default:
            return {
                icon: <ExclamationCircleIcon className={"h-6 w-6 "} />,
                buttonClass: "bg-primary-500 text-primary-100",
                iconWrapperClass: "bg-primary-100 text-primary-600 ",
            };
    }
};

const ModalMessageCenter: FC<IModalMessageCenter> = (alert) => {
    const { open } = useOpenAndCloseModal();
    const { onClose } = alert;

    const { iconWrapperClass, icon } = getIconAndColor(alert.type);

    const handleClose = () => {
        onClose();
        // closeModal();
    };
    return (
        <Modal open={open} onClose={handleClose}>
            <div className="relative transform overflow-hidden rounded-lg border border-gray-300  bg-white text-left transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div
                            className={`mx-auto flex h-12 w-12 flex-shrink-0 ${iconWrapperClass} items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10`}
                        >
                            {icon}
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <h3
                                className="text-base font-semibold leading-6 text-primary-950"
                                id="modal-title"
                            >
                                {alert.title}
                            </h3>
                            <div className="mt-2">
                                <p className="text-sm text-dark-green">
                                    {alert.message}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="justify-end bg-gray-50 px-4 py-3 sm:flex sm:px-6">
                    {alert.actions}
                </footer>
            </div>
        </Modal>
    );
};
export default ModalMessageCenter;
