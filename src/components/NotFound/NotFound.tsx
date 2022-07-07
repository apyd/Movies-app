import React from "react";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import styles from "./NotFound.scss";
import { Logo } from "../Logo/Logo";

export const NotFound = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  return (
    <section className={cx("not-found")}>
      <Logo />
      <h3>404 - Page not found</h3>
      <p>Oops... looks like this page doesn't exist</p>
      <Button onClick={() => navigate("/search")}>Go back to home page</Button>
    </section>
  );
};
