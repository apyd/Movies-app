import React from "react";
import classNames from "classnames/bind";
import styles from "./LoadingSpinner.module.scss";

const cx = classNames.bind(styles);

export const LoadingSpinner = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("spinner")}>
      <div className={cx("spinner__icon")}></div>
      <span className={cx("spinner_text")}>Loading...</span>
    </div>
  );
};
