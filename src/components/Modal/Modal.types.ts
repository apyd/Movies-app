import { ReactNode } from "react";

export interface IModalProps {
    title: string,
    isOpened: any,  // TODO - cannot be any
    toggleModal: any,
    children: ReactNode
}