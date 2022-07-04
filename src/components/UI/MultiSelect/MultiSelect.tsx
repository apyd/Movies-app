import React, { EventHandler, FC, useState } from 'react';
import classNames from 'classnames/bind';
import { IPropsMultiSelect } from './MultiSelect.types';
import DropdownIcon from '../../../assets/chevron-down.svg';
import styles from './MultiSelect.scss';

export const MultiSelect: FC<IPropsMultiSelect> = ({ options, selected, toggleOption, label }) => {
  const cx = classNames.bind(styles);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = document.getElementById('multi-select');
    if (event.target === target) {
      setIsExpanded((isExpanded) => !isExpanded);
    }
    return;
  };

  return (
    <div className={cx('multi-select')}>
      <span className={cx('multi-select__label')}>{label}</span>
      <div
        id="multi-select"
        tabIndex={0}
        className={cx('multi-select__selected')}
        onClick={(e) => toggleSelect(e)}>
        <span className={cx('multi-select__summary')}>{selected.length} selected</span>
        <DropdownIcon className={cx('icon icon--rotated')} />
      </div>
      {isExpanded && (
        <ul className={cx('multi-select__options')}>
          {options.map(({ id, title }) => {
            return (
              <li key={id} className={cx('multi-select__option')} onClick={() => toggleOption(id)}>
                <input
                  checked={selected.includes(id)}
                  type="checkbox"
                  className={cx('multi-select__checkbox')}
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
