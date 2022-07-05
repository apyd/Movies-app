import React, { FC, ReactNode } from "react";
import classNames from "classnames/bind";
import { Button } from "../../UI/Button/Button";
import Success from "../../../assets/success.svg";
import Error from "../../../assets/error.svg";
import { IStatusModalContentProps } from "./Status.types";
import styles from "./Status.scss";
import { SvgIcon } from "../../UI/Icon/SvgIcon";

export const status_icon: { [key: string]: ReactNode } = {
  SUCCESS: <SvgIcon icon={Success} />,
  ERROR: <SvgIcon icon={Error} />,
};

export const status_text: { [key: string]: string } = {
  SUCCESS: "Action performed succesfully.",
  ERROR: "Action cannot be performed. Please contact administrator.",
};

export const Status: FC<IStatusModalContentProps> = ({
  status,
  toggleModal,
}) => {
  const cx = classNames.bind(styles);
  const Icon = status_icon[status];
  return (
    <div className={cx("status-modal")}>
      {Icon}
      <p className={cx("status-modal__text")}>{status_text[status]}</p>
      <Button onClick={toggleModal}>Close</Button>
    </div>
  );
};
