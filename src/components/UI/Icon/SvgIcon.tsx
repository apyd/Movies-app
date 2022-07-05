import React from "react";
import classNames from "classnames/bind";
import styles from "./SvgIcon.scss";

export const SvgIcon = (icon: any) => {
  console.log(icon);
  const Svg = icon?.icon;
  const cx = classNames.bind(styles);
  return <Svg className={cx(styles.icon)} />;
};
