import React, { FC } from "react";
import classNames from "classnames/bind";
import { IButtonProps } from "./Button.types";
import { ButtonType, ButtonSize, ButtonShape } from "./Button.consts";
import styles from "./Button.scss";

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  size = ButtonSize.medium,
  variant = ButtonType.primary,
  shape = ButtonShape.rectangle,
}) => {
  const cx = classNames.bind(styles);
  return (
    <button
      className={cx(styles.btn, [
        styles[`btn--${variant}`],
        styles[`btn--${size}`],
        styles[`btn--${shape}`],
      ])}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
