import React from "react";
import classNames from "classnames/bind";
import { Logo } from "../UI/Logo/Logo";
import { LogoSize } from "../UI/Logo/Logo.const";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

export const Footer = () => {
  return (
    <footer className={cx(styles.footer)}>
      <Logo size={LogoSize.small} />
    </footer>
  );
};
