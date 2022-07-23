import React, { FC } from 'react';
import { ISortProps } from './Sort.types';
import './Sort.scss';

export const Sort: FC<ISortProps> = ({ options, onOptionChange, sortLabel = 'Sort by' }) => {
  return (
    <div className="sort">
      <label className="sort__label" htmlFor="sort">
        {sortLabel}
      </label>
      <select
        className="sort__input"
        name="sort"
        id="sort"
        onChange={(e) => onOptionChange(e.target.value)}>
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

Sort.defaultProps = {
  options: [],
  sortLabel: 'Sort by'
};
