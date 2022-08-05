import React, { FC } from "react";
import classNames from "classnames/bind";
import { ISortProps } from "./Sort.types";
import styles from "./Sort.module.scss";

const cx = classNames.bind(styles);

export const Sort: FC<ISortProps> = ({
  selected,
  options,
  onOptionChange,
  sortLabel = "Sort by",
}) => {
  return (
    <div className={cx("sort")}>
      <label className={cx("sort__label")} htmlFor="sort">
        {sortLabel}
      </label>
      <select
        className={cx("sort__input")}
        name="sort"
        id="sort"
        value={selected}
        onChange={(e) => onOptionChange(e.target.value)}
      >
        {options &&
          options.map(({ id, label, value }) => (
            <option key={id} value={value}>
              {label}
            </option>
          ))}
      </select>
    </div>
  );
};
