import React, { FC } from 'react';
import { IFilterListProps } from './FilterList.types';
import './FilterList.scss';
import Filter from '../Filter';

export const FilterList: FC<IFilterListProps> = ({ options, onFilterSelect }) => {
  return (
    <form className="filters">
      {options.map(({ label, value, name }, index) => {
        return (
          <Filter
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
