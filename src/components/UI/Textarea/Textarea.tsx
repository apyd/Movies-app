import React, { FC } from "react";
import classNames from "classnames/bind";
import { IPropsTextarea } from "./Textarea.types";
import styles from "./Textarea.module.scss";

const cx = classNames.bind(styles);

export const Textarea: FC<IPropsTextarea> = ({
  id,
  name,
  value,
  touched,
  onBlur,
  onChange,
  placeholder,
  label,
  error,
}) => {
  const isInvalid = !!error && touched;

  return (
    <div className={cx("wrapper--textarea")}>
      <label htmlFor={id} className={cx("textarea-label")}>
        {label.toUpperCase()}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        rows={2}
        className={cx("textarea", { "textarea--invalid": isInvalid })}
      />
      {isInvalid && <span className={cx("input-error")}>{error}</span>}
    </div>
  );
};
