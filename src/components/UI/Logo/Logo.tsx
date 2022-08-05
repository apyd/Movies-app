import React, { FC } from "react";
import classNames from "classnames/bind";
import { LogoSize } from "./Logo.const";
import { ILogoProps } from "./Logo.types";
import styles from "./Logo.module.scss";

const cx = classNames.bind(styles);

export const Logo: FC<ILogoProps> = ({ size }) => {
  return (
    <span className={cx(styles.logo, { [styles[`logo--${size}`]]: size })}>
      <span>netflix</span>roulette
    </span>
  );
};

Logo.defaultProps = {
  size: LogoSize.medium,
};
