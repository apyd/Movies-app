import React, { FC, ReactNode } from "react";
import { Modal } from "../../Modal";
import Success from "../../../../assets/success.svg";
import Error from "../../../../assets/error.svg";
import { IStatusModalProps } from "./StatusModal.types";
import "./StatusModal.scss";

export const STATUS_ICON: { [key: string]: ReactNode } = {
  SUCCESS: <Success className="icon" />,
  ERROR: <Error className="icon" />,
};

export const STATUS_TEXT: { [key: string]: string } = {
  SUCCESS: "Action performed succesfully.",
  ERROR: "Action cannot be performed. Please contact administrator.",
};

export const StatusModal: FC<IStatusModalProps> = ({ status }) => {
  const Icon = STATUS_ICON[status];
  return (
    <Modal title="" toggleModal={() => {}} isOpened="false">
      <div className="status-modal">
        {Icon}
        <p className="status-modal__text">{STATUS_TEXT[status]}</p>
      </div>
    </Modal>
  );
};
