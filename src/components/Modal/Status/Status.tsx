import React, { FC, ReactNode } from "react";
import classNames from "classnames/bind";
import { SvgIcon } from "../../UI/Icon/SvgIcon";
import Success from "../../../assets/success.svg";
import Error from "../../../assets/error.svg";
import { IStatusContentProps } from "./Status.types";
import styles from "./Status.module.scss";

export const status_icon: { [key: string]: ReactNode } = {
  SUCCESS: <SvgIcon icon={Success} />,
  ERROR: <SvgIcon icon={Error} />,
};

export const status_text: { [key: string]: string } = {
  SUCCESS: "Action performed succesfully.",
  ERROR: "Action cannot be performed. Please contact administrator.",
};

const cx = classNames.bind(styles);

export const Status: FC<IStatusContentProps> = ({ status }) => {
  const Icon = status_icon[status];
  return (
    <div className={cx("status-modal")}>
      {Icon}
      <p className={cx("status-modal__text")}>{status_text[status]}</p>
    </div>
  );
};
