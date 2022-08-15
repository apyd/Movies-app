import React, { FC } from 'react';
import { SortLabel, SortSelect, SortWrapper } from './Sort.styled';
import { ISortProps } from './Sort.types';

export const Sort: FC<ISortProps> = ({
  selected,
  options,
  onOptionChange,
  sortLabel = 'Sort by'
}) => {
  return (
    <SortWrapper>
      <SortLabel htmlFor="sort">{sortLabel}</SortLabel>
      <SortSelect
        name="sort"
        id="sort"
        value={selected}
        onChange={(e) => onOptionChange(e.target.value)}
      >
        {options &&
          options.map(({ id, label, value }) => (
            <option key={id} value={value}>
              {label}
            </option>
          ))}
      </SortSelect>
    </SortWrapper>
  );
};
