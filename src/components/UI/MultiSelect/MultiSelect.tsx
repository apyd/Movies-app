import React, { FC } from "react";
import classNames from "classnames/bind";
import DropdownIcon from "../../../assets/chevron-down.svg";
import { SvgIcon } from "../Icon/SvgIcon";
import { IPropsMultiSelect } from "./MultiSelect.types";
import styles from "./MultiSelect.module.scss";

const cx = classNames.bind(styles);

export const MultiSelect: FC<Partial<IPropsMultiSelect>> = ({
  options,
  isExpanded,
  value,
  touched,
  onChange,
  onBlur,
  toggleSelect,
  label,
  error,
}) => {
  const isInvalid = !!error && touched;

  const onInputChange = (inputValue: string) => {
    let valuesCopy = [...value];
    if (!valuesCopy.includes(inputValue)) {
      valuesCopy = [...valuesCopy, inputValue];
      onChange("genres", valuesCopy, false);
    } else {
      valuesCopy.splice(value.indexOf(inputValue), 1);
      onChange("genres", valuesCopy, false);
    }
  };

  return (
    <div className={cx("multi-select")}>
      <span className={cx("multi-select__label")}>{label}</span>
      <div
        id="multi-select"
        tabIndex={0}
        className={cx("multi-select__selected", {
          "multi-select__selected--invalid": isInvalid,
        })}
        onClick={toggleSelect}
      >
        <span
          className={cx("multi-select__summary", {
            "multi-select__summary--invalid": isInvalid,
          })}
        >
          {value.length} selected
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
                onClick={() => onInputChange(title)}
              >
                <input
                  name="name"
                  checked={value.includes(title)}
                  type="checkbox"
                  className={cx("multi-select__checkbox")}
                  value={value}
                  onBlur={onBlur}
                  onChange={() => onInputChange(title)}
                />
                <span>{title}</span>
              </li>
            );
          })}
        </ul>
      )}
      {isInvalid && <span className={cx("input-error")}>{error}</span>}
    </div>
  );
};
