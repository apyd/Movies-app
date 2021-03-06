import React, { FC } from "react";
import { LogoSize } from "./Logo.const";
import { ILogoProps } from "./Logo.types";
import "./Logo.scss";

export const Logo: FC<ILogoProps> = ({ size }) => {
  return (
    <span className={`logo logo--${size}`}>
      <span>netflix</span>roulette
    </span>
  );
};

Logo.defaultProps = {
  size: LogoSize.medium,
};
