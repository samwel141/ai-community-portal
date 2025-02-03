import { Dialog, Transition } from "@headlessui/react";
import {
    createContext,
    type Dispatch,
    Fragment,
    type ReactNode,
    useContext,
} from "react";
import { ModalContent } from "~/components/modal/modal-contents";
import { ModalFooter } from "~/components/modal/modal-footer";
import { ModalFooterLoader } from "~/components/modal/modal-footer-loader";

import { ModalFormError } from "~/components/modal/modal-form-error";
import { ModalHeader } from "~/components/modal/modal-header";
import { ModalPanel } from "~/components/modal/modal-pannel";
import { cn } from "~/utils";

export type DialogSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export interface DialogProps {
    open: boolean;
    children: ReactNode;
    onClose: Dispatch<boolean>;
    top?: DialogSize;
}

const ModalContext = createContext<{
    open: boolean;
    onClose: Dispatch<boolean>;
} | null>(null);

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context)
        throw new Error(
            "useModalContext hooks should be used inside of SlideOverContext provider "
        );
    return context;
};

const Modal = ({ open, onClose, children, top = "3xl" }: DialogProps) => {
    return (
        <ModalContext.Provider value={{ open, onClose }}>
            <Transition appear show={open}>
                <Dialog
                    as={"div"}
                    onClose={onClose}
                    className={cn(
                        "fixed inset-0 top-0 z-50 p-5 ",
                        { "p-[10vh] 2xl:pt-[10vh] ": top === "3xl" },
                        { "p-[8vh] 2xl:pt-[10vh] ": top === "2xl" },
                        { "p-[6vh] 2xl:pt-[10vh] ": top === "xl" },
                        { "p-[5vh] 2xl:pt-[10vh] ": top === "lg" },
                        { "p-[4vh] 2xl:pt-[10vh] ": top === "md" },
                        { "p-[3vh] 2xl:pt-[10vh] ": top === "sm" }
                    )}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200 "
                        enterFrom="opacity-0"
                        enterTo="opacity-100 "
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/50 backdrop-blur-[2px] transition-opacity" />
                    </Transition.Child>

                    <Transition.Child
                        className="relative mx-auto w-fit"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {children}
                    </Transition.Child>
                </Dialog>
            </Transition>
        </ModalContext.Provider>
    );
};

Modal.FooterLoading = ModalFooterLoader;
Modal.Header = ModalHeader;
Modal.FormError = ModalFormError;
Modal.Footer = ModalFooter;
Modal.Content = ModalContent;
Modal.Panel = ModalPanel;

export default Modal;
