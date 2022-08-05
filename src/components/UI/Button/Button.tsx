import React, { FC } from "react";
import classNames from "classnames/bind";
import { IButtonProps } from "./Button.types";
import { ButtonSize, ButtonShape, ButtonVariant } from "./Button.consts";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  size = ButtonSize.medium,
  variant = ButtonVariant.primary,
  shape = ButtonShape.rectangle,
  type,
  isDisabled = false,
}) => {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={cx(styles.btn, [
        styles[`btn--${variant}`],
        styles[`btn--${size}`],
        styles[`btn--${shape}`],
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
