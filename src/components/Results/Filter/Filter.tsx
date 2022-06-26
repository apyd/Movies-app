import React, { FC } from "react";
import { IFilterProps } from "./Filter.types";
import "./Filter.scss";

const Filter: FC<IFilterProps> = ({ id, value }) => {
  return (
    <div className="filter">
      <input
        id={id}
        className="filter__input"
        type="radio"
        name={value}
        value={value}
      />
      <label tabIndex={0} className="filter__label" htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export default Filter;
