import React, { FC } from "react";
import classNames from "classnames/bind";
import { LogoSize } from "./Logo.const";
import { ILogoProps } from "./Logo.types";
import styles from "./Logo.scss";

export const Logo: FC<ILogoProps> = ({ size }) => {
  const cx = classNames.bind(styles);
  return (
    <span className={cx(styles.logo, { [styles[`logo--${size}`]]: size })}>
      <span>netflix</span>roulette
    </span>
  );
};

Logo.defaultProps = {
  size: LogoSize.medium,
};
