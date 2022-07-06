import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import DropdownIcon from "../../../assets/chevron-down.svg";
import { SvgIcon } from "../Icon/SvgIcon";
import { IPropsMultiSelect } from "./MultiSelect.types";
import styles from "./MultiSelect.scss";

export const MultiSelect: FC<Partial<IPropsMultiSelect>> = ({
  options,
  isExpanded,
  selected,
  value,
  onChange,
  toggleOption,
  toggleSelect,
  label,
  error,
}) => {
  const cx = classNames.bind(styles);

  value = selected;

  return (
    <div className={cx("multi-select")}>
      <span className={cx("multi-select__label")}>{label}</span>
      <div
        id="multi-select"
        tabIndex={0}
        className={cx("multi-select__selected", {
          "multi-select__selected--invalid": error,
        })}
        onClick={toggleSelect}
      >
        <span
          className={cx("multi-select__summary", {
            "multi-select__summary--invalid": error,
          })}
        >
          {selected.length} selected
        </span>
        <SvgIcon icon={DropdownIcon} />
      </div>
      {isExpanded && (
        <ul className={cx("multi-select__options")}>
          {options.map(({ id, title }) => {
            return (
              <li
                key={id}
                className={cx("multi-select__option")}
                onClick={() => toggleOption(title)}
              >
                <input
                  checked={selected.includes(title)}
                  type="checkbox"
                  className={cx("multi-select__checkbox")}
                />
                <span>{title}</span>
              </li>
            );
          })}
        </ul>
      )}
      {error && <span className={cx("input-error")}>{error}</span>}
    </div>
  );
};
