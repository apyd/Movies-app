import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import DropdownIcon from "../../../assets/chevron-down.svg";
import { SvgIcon } from "../Icon/SvgIcon";
import { IPropsMultiSelect } from "./MultiSelect.types";
import styles from "./MultiSelect.scss";

export const MultiSelect: FC<IPropsMultiSelect> = ({
  options,
  selected,
  toggleOption,
  label,
}) => {
  const cx = classNames.bind(styles);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleSelect = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <div className={cx("multi-select")}>
      <span className={cx("multi-select__label")}>{label}</span>
      <div
        id="multi-select"
        tabIndex={0}
        className={cx("multi-select__selected")}
        onClick={toggleSelect}
      >
        <span className={cx("multi-select__summary")}>
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
                onClick={() => toggleOption(id)}
              >
                <input
                  checked={selected.includes(id)}
                  type="checkbox"
                  className={cx("multi-select__checkbox")}
                />
                <span>{title}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
