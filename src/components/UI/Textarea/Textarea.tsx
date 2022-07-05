import React, { FC } from "react";
import { IPropsTextarea } from "./Textarea.types";
import "./Textarea.scss";

export const Textarea: FC<IPropsTextarea> = ({
  id,
  name,
  placeholder,
  label,
}) => {
  return (
    <div className="wrapper--textarea">
      <label htmlFor={id} className="textarea-label">
        {label.toUpperCase()}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={2}
        className="textarea"
      />
    </div>
  );
};
