import React, { FC } from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';
import { IFilterProps } from './Filter.types';

export const Filter: FC<IFilterProps> = ({ name, selected, label, value, onFilterSelect }) => {
  return (
    <>
      <FilterInput
        id={name + label}
        type="radio"
        name={name}
        value={value}
        checked={value === selected}
        onChange={() => {}}
      />
      <FilterLabel tabIndex={0} onClick={onFilterSelect} htmlFor={name + label}>
        {label}
      </FilterLabel>
    </>
  );
};
