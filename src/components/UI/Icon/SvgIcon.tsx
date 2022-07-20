import React from "react";
import classNames from "classnames/bind";
import styles from "./SvgIcon.scss";

export const SvgIcon = (props: any) => {
  const { icon: Svg, isSmall } = props;
  const cx = classNames.bind(styles);
  return <Svg className={cx(styles.icon, { "icon--small": isSmall })} />;
};
