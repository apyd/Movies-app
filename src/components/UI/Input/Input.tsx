import React, { FC } from "react";
import classNames from "classnames/bind";
import { IPropsInput } from "./Input.types";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

export const Input: FC<IPropsInput> = ({
  id,
  name,
  value,
  touched,
  onBlur,
  onChange,
  placeholder,
  type = "text",
  label,
  error,
}) => {
  const isInvalid = !!error && touched;

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
        className={cx("input", { "input--invalid": isInvalid })}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {isInvalid && <span className={cx("input-error")}>{error}</span>}
    </>
  );
};
