import React, { FC } from 'react';
import { Filter } from '../Filter';
import { IFilterListProps } from './FilterList.types';
import { Filters } from './FilterList.styled';

export const FilterList: FC<IFilterListProps> = ({ selected, options, onFilterSelect }) => {
  return (
    <Filters>
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
    </Filters>
  );
};
