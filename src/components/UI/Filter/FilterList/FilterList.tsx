import React, { FC } from "react";
import classNames from "classnames/bind";
import { Filter } from "../Filter";
import { IFilterListProps } from "./FilterList.types";
import styles from "./FilterList.module.scss";

const cx = classNames.bind(styles);

export const FilterList: FC<IFilterListProps> = ({
  selected,
  options,
  onFilterSelect,
}) => {
  return (
    <form className={cx("filters")}>
      {options.map(({ label, value, name }, index) => {
        return (
          <Filter
            selected={selected}
            key={index}
            name={name}
            label={label}
            value={value}
            onFilterSelect={() => onFilterSelect(value)}
          />
        );
      })}
    </form>
  );
};
