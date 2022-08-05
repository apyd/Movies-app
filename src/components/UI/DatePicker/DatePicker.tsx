import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import { IPropsDatePicker } from "./DatePicker.types";
import styles from "./DatePicker.module.scss";

const cx = classNames.bind(styles);

export const DatePicker: FC<IPropsDatePicker> = ({
  id,
  name,
  label,
  value,
  touched,
  onBlur,
  onChange,
  error,
}) => {
  const [type, setType] = useState<string>("text");

  const onInputFocus = () => {
    setType("date");
  };

  const isInvalid = !!error && touched;

  return (
    <>
      <label htmlFor={id} className={cx("date-picker__label")}>
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={cx("date-picker__input", {
          "date-picker__input--invalid": isInvalid,
        })}
        placeholder="Select date"
        onFocus={onInputFocus}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {isInvalid && <span className={cx("input-error")}>{error}</span>}
    </>
  );
};
