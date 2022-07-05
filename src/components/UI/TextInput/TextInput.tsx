import React, { FC } from "react";
import { IPropsTextInput } from "./TextInput.types";
import "./TextInput.scss";

export const TextInput: FC<IPropsTextInput> = ({
  id,
  name,
  placeholder,
  label,
  errorText,
}) => {
  return (
    <>
      <label htmlFor={id} className="text-label">
        {label.toUpperCase()}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="text-input"
      />
      <span className="text-input__error">{errorText}</span>
    </>
  );
};
