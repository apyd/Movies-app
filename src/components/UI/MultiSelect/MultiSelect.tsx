import React, { FC } from "react";
import { IPropsMultiSelect } from "./MultiSelect.types";
import "./MultiSelect.scss";

export const MultiSelect: FC<IPropsMultiSelect> = ({ label }) => {
  return (
    <div className="multi-select">
      <label className="multi-select__label" htmlFor="sort">
        {label}
      </label>
      <select
        className="multi-select__input"
        name="multi-select"
        id="multi-select"
        defaultValue={0}
      ></select>
    </div>
  );
};
