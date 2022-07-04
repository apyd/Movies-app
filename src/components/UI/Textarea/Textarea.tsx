import React, { FC } from "react";
import classNames from "classnames/bind";
import { IPropsTextarea } from "./Textarea.types";
import styles from "./Textarea.scss";

export const Textarea: FC<IPropsTextarea> = ({
  id,
  name,
  placeholder,
  label,
}) => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper--textarea")}>
      <label htmlFor={id} className={cx("textarea-label")}>
        {label.toUpperCase()}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={2}
        className={cx("textarea")}
      />
    </div>
  );
};
