import React, { FC } from "react";
import { ISortProps } from "./Sort.types";
import "./Sort.scss";

export const Sort: FC<ISortProps> = ({
  options,
  onOptionChange,
  sortLabel,
}) => {
  return (
    <div className="sort">
      <label className="sort__label" htmlFor="sort">
        {sortLabel}
      </label>
      <select
        className="sort__input"
        name="sort"
        id="sort"
        onChange={onOptionChange}
        defaultValue={0}
      >
        {options &&
          options.map(({ id, label, value, isDefault }) => (
            <option key={id} value={value}>
              {label}
            </option>
          ))}
      </select>
    </div>
  );
};

Sort.defaultProps = {
  options: [],
  onOptionChange: () => {},
  sortLabel: "Sort by",
};
