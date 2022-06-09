import React, { FC } from "react";
import {
  ButtonType,
  ButtonSize,
  ButtonShape,
  IButtonProps,
} from "./Button.types";
import "./Button.scss";

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  size,
  variant,
  shape,
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} btn--${shape}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: "Default children",
  onClick: () => {},
  size: ButtonSize.medium,
  variant: ButtonType.primary,
  shape: ButtonShape.rectangle,
};
