import { Dispatch, ReactNode } from "react";

export type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export interface ModalProps {
    open: boolean;
    children: ReactNode;
    onClose: Dispatch<boolean>;
    top?: ModalSize;
}
