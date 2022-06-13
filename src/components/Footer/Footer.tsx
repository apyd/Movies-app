import React from "react";
import { Logo } from "../Logo/Logo";
import { LogoSize } from "../Logo/Logo.const";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Logo size={LogoSize.small} />
    </footer>
  );
};
