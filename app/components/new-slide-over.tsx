import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "./icons";

interface SlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function NewSlideOver({ isOpen=true, onClose, title, children }: SlideOverProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 bg-primary" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed right-0 top-0 bottom-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md bg-primary shadow-xl">
                  <div className="h-full flex flex-col p-6">
                    <div className="flex items-center justify-between pb-4">
                      <h2 className="text-lg font-semibold text-textColor">{title}</h2>
                      <button
                        onClick={onClose}
                        className="rounded-md bg-primary text-white p-2 hover:opacity-80"
                      >
                        <XIcon/>
                      </button>
                    </div>
                    <div className="mt-4 flex-1 overflow-auto">{children}</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
