import React, { FC } from "react";
import { IFiltersProps } from "./Filters.types";
import "./Filters.scss";

export const Filters: FC<IFiltersProps> = ({ data }) => {
  return (
    <form className="filters">
      {data.map(({ id, name, value, isChecked }) => {
        return (
          <div className="filter">
            <input
              id={id}
              className="filter__input"
              type="radio"
              name={name}
              value={value}
            />
            <label tabIndex={0} className="filter__label" htmlFor={id}>
              {value}
            </label>
          </div>
        );
      })}
    </form>
  );
};
