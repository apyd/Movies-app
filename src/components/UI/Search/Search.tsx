import React, { FC } from 'react';
import { Button } from '../Button/Button';
import { ISearchProps } from './Search.types';
import { SearchInput, SearchWrapper } from './Search.styled';
import { ButtonShape, ButtonSize, ButtonVariant } from '../Button/Button.consts';

export const Search: FC<ISearchProps> = ({
  value,
  placeholder = 'What do you want to watch?',
  searchButtonText = 'Search',
  onChange,
  onSearch
}) => {
  return (
    <SearchWrapper id="searchForm" onSubmit={(e) => onSearch(e)}>
      <label htmlFor="search"></label>
      <SearchInput
        type="search"
        id="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name="search"
        placeholder={placeholder}
      />
      <Button
        size={ButtonSize.medium}
        shape={ButtonShape.rectangle}
        variant={ButtonVariant.primary}
        type="submit">
        {searchButtonText}
      </Button>
    </SearchWrapper>
  );
};
