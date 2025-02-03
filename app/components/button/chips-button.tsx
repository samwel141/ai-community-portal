import { XMarkIcon } from "@heroicons/react/24/outline";
import type { FC, MouseEvent } from "react";
import { ButtonIcon } from "~/components/button/index";

interface Props {
    label: string;
    onClick?: VoidFunction;
}

export const ChipsButton: FC<Props> = ({ label, onClick }) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        onClick?.();
    };
    return (
        <div
            className={
                "flex w-fit items-center gap-1.5 rounded-lg bg-[#EEF5DF] px-2 py-1 text-sm text-dark-green"
            }
        >
            <p className={"whitespace-nowrap"}>{label}</p>
            <ButtonIcon
                Icon={XMarkIcon}
                iconClassName={"size-4"}
                onClick={handleClick}
                iconStrokeWidth={2}
                className={
                    "size-4 text-dark backdrop-opacity-50 hover:bg-black/20 hover:rounded-lg"
                }
            />
        </div>
    );
};
