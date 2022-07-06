import React, { FC } from "react";
import classNames from "classnames/bind";
import { IPropsInput } from "./Input.types";
import styles from "./Input.scss";

export const Input: FC<IPropsInput> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  label,
  errorText,
}) => {
  const cx = classNames.bind(styles);
  return (
    <>
      <label htmlFor={id} className={cx("text-label")}>
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={cx("input")}
        value={value}
        onChange={onChange}
      />
      <span className={cx("input__error")}>{errorText}</span>
    </>
  );
};
