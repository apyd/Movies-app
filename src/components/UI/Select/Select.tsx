import React, { FC } from "react";
import "./Select.scss";
import { ISelectProps } from "./Select.types";

export const Select: FC<ISelectProps> = ({
  options,
  onOptionChange,
  selectLabel,
}) => {
  return (
    <div className="select">
      <label className="select__label" htmlFor="select">
        {selectLabel}
      </label>
      <select
        className="select__input"
        name="select"
        id="select"
        onChange={onOptionChange}
      >
        {options &&
          options.map(({ label, value, isDefault }) =>
            !!isDefault ? (
              <option value={value}>{label}</option>
            ) : (
              <option selected value={value}>
                {label}
              </option>
            )
          )}
      </select>
    </div>
  );
};

Select.defaultProps = {
  options: [
    {
      id: 1,
      label: "Default value",
      value: 1,
      isDefault: true,
    },
  ],
  onOptionChange: () => {},
  selectLabel: "Sort by",
};
