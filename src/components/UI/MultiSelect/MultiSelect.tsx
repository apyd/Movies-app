import React, { FC } from 'react';
import classNames from 'classnames/bind';
import DropdownIcon from '../../../assets/chevron-down.svg';
import { SvgIcon } from '../Icon/SvgIcon';
import { IPropsMultiSelect } from './MultiSelect.types';
import styles from './MultiSelect.scss';

const cx = classNames.bind(styles);

export const MultiSelect: FC<Partial<IPropsMultiSelect>> = ({
  options,
  isExpanded,
  selected,
  value,
  touched,
  onChange,
  onBlur,
  toggleOption,
  toggleSelect,
  label,
  error
}) => {
  // console.log("multiselect value: ", value);
  console.log('value:', value, 'selected:', selected);

  const isInvalid = !!error && touched;

  return (
    <div className={cx('multi-select')}>
      <span className={cx('multi-select__label')}>{label}</span>
      <div
        id="multi-select"
        tabIndex={0}
        className={cx('multi-select__selected', {
          'multi-select__selected--invalid': isInvalid
        })}
        onClick={toggleSelect}>
        <span
          className={cx('multi-select__summary', {
            'multi-select__summary--invalid': isInvalid
          })}>
          {selected.length} selected
        </span>
        <SvgIcon icon={DropdownIcon} />
      </div>
      {isExpanded && (
        <ul className={cx('multi-select__options')}>
          {options.map(({ id, title }) => {
            return (
              <li
                key={id}
                className={cx('multi-select__option')}
                onClick={() => toggleOption(title)}>
                <input
                  name="genres"
                  checked={selected.includes(title)}
                  type="checkbox"
                  className={cx('multi-select__checkbox')}
                  value={value}
                  onBlur={onBlur}
                  onChange={() => onChange()}
                />
                <span>{title}</span>
              </li>
            );
          })}
        </ul>
      )}
      {isInvalid && <span className={cx('input-error')}>{error}</span>}
    </div>
  );
};
