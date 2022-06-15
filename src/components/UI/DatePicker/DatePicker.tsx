import React, { FC } from "react";
import { IPropsDatePicker } from "./DatePicker.types";
import "./DatePicker.scss";

export const DatePicker: FC<IPropsDatePicker> = ({
  id,
  name,
  placeholder,
  label,
}) => {
  return (
    <div className="date-picker">
      <label htmlFor={id} className="date-picker__label">
        {label.toUpperCase()}
      </label>
      <input
        type="datetime-local"
        id={id}
        name={name}
        placeholder={placeholder}
        className="date-picker__input"
      />
    </div>
  );
};
