import React, { FC } from 'react';
import { IFilterProps } from './Filter.types';
import './Filter.scss';

export const Filter: FC<IFilterProps> = ({ name, label, value, onFilterSelect }) => {
  return (
    <div className="filter">
      <input id={name + label} type="radio" name={name} value={value} className="filter__input" />
      <label tabIndex={0} className="filter__label" onClick={onFilterSelect} htmlFor={name + label}>
        {label}
      </label>
    </div>
  );
};
