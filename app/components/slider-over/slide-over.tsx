import { Dialog, Transition } from "@headlessui/react";

import { createContext, Dispatch, Fragment, useContext } from "react";
import { ModalProps } from "~/components/modal/modal-types";
import { SliderOverActions as FutureSlideOverAction } from "~/components/slider-over/slide-over-actions";
import { SliderOverContent } from "~/components/slider-over/slider-over-contents";
import { SlideOverFooter } from "~/components/slider-over/slider-over-footer";
import {
    SliderOverActions,
    SliderOverHeader,
    SliderOverTitle,
} from "~/components/slider-over/slider-over-header";
import { SliderOverPanel } from "~/components/slider-over/slider-over-pannel";

const SlideOverContext = createContext<{
    open: boolean;
    onClose: Dispatch<boolean>;
} | null>(null);

export const useSliderOverContext = () => {
    const context = useContext(SlideOverContext);
    if (!context)
        throw new Error(
            "useSliderOverContext hooks should be used inside of SlideOverContext provider "
        );
    return context;
};

const SlideOver = ({ onClose, open, children }: ModalProps) => {
    return (
        <SlideOverContext.Provider value={{ onClose, open }}>
            <Transition appear show={open} as={"div"}>
                <Dialog
                    onClose={onClose}
                    className={" fixed text-textColor right-0 top-0 z-40 h-full"}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100 "
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/50 backdrop-blur-[2px] transition-opacity" />
                    </Transition.Child>

                    <Transition.Child
                        className={"relative h-full"}
                        enter="transform transition ease-in-out duration-300 "
                        enterFrom=" translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-300 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <div className={"h-full p-4"}>{children}</div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </SlideOverContext.Provider>
    );
};

SlideOver.Panel = SliderOverPanel;
SlideOver.Header = SliderOverHeader;
SlideOver.Content = SliderOverContent;
SlideOver.Footer = SlideOverFooter;
SlideOver.Title = SliderOverTitle;
SlideOver.Actions = SliderOverActions;
SlideOver.FutureActions = FutureSlideOverAction;

export default SlideOver;
