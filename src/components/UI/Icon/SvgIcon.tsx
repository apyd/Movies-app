import React from "react";
import classNames from "classnames/bind";
import styles from "./SvgIcon.scss";

const cx = classNames.bind(styles);

export const SvgIcon = (props: any) => {
  const { icon: Svg, isSmall } = props;
  return <Svg className={cx(styles.icon, { "icon--small": isSmall })} />;
};
