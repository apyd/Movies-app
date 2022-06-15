import React, { FC, ReactNode } from "react";
import { Modal } from "../../Modal";
import Success from "../../../../assets/tick.svg";
import Error from "../../../../assets/cancelled.svg";
import { IStatusModalProps } from "./StatusModal.types";

export const STATUS_ICON: { [key: string]: ReactNode } = {
  SUCCESS: <Success />,
  ERROR: <Error />,
};

export const STATUS_TEXT: { [key: string]: string } = {
  SUCCESS: "Action performed succesfully.",
  ERROR: "Action cannot be performed. Please contact administrator.",
};

export const StatusModal: FC<IStatusModalProps> = ({ status }) => {
  return (
    <Modal title="" toggleModal={() => {}} isOpened="false">
      <div className="status-modal"></div>
      {STATUS_ICON[status]}
      <p className="status-modal__text">{STATUS_TEXT[status]}</p>
    </Modal>
  );
};
