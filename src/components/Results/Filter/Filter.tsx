import React, { FC } from "react";
import classNames from "classnames/bind";
import { IFilterProps } from "./Filter.types";
import styles from "./Filter.scss";

const Filter: FC<IFilterProps> = ({
  name,
  label,
  value,
  selected,
  onFilterSelect,
}) => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("filter")}>
      <input
        id={name + label}
        type="radio"
        name={name}
        value={value}
        className={cx("filter__input")}
        checked={value === selected}
      />
      <label
        tabIndex={0}
        className={cx("filter__label")}
        onClick={onFilterSelect}
        htmlFor={name + label}
      >
        {label}
      </label>
    </div>
  );
};

export default Filter;
