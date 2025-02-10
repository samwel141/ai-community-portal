import { XMarkIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import AvatarCard from "~/components/avatar/avatar-card";
import Button from "~/components/button/button";
import { useModalContext } from "~/components/modal/modal";

interface ModalHeaderProps {
    title: string;
    subtitle?: string;
}

export const ModalHeader: FC<ModalHeaderProps> = ({ title, subtitle }) => {
    const { onClose: setOpen } = useModalContext();

    return (
        <header
            className={
                "items-between border-b border-secondary relative items-start gap-2 mx-4 py-3"
            }
        >
            <AvatarCard
                wrapperClassName={"gap-4 items-start"}
                className={"mt-0.5 border bg-transparent text-dark"}
                titleClassName={"text-lg text-textColor pb-1"}
                title={title}
                subtitle={subtitle}
                subtitleClassName={"text-dark-green order-last "}
            />

            <Button
                type="button"
                onClick={() => setOpen(false)}
                className={
                    "center size-8 absolute -top-5 -right-4 shrink-0  p-0 border-none focus:ring-none text-textColor hover:opacity-80  active:ring-black/10"
                }
            >
                <XMarkIcon strokeWidth={1.8} className={"size-6"} />
            </Button>
        </header>
    );
};
