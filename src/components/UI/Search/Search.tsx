import React, { FC } from 'react';
import { Button } from '../Button/Button';
import { ISearchProps } from './Search.types';
import './Search.scss';

export const Search: FC<ISearchProps> = ({
  placeholder = 'What do you want to watch?',
  searchButtonText = 'Search',
  value,
  onChange,
  onSearch
}) => {
  return (
    <form className="search" onSubmit={(e) => onSearch(e)}>
      <label htmlFor="search"></label>
      <input
        type="search"
        id="search"
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={() => {}}>{searchButtonText}</Button>
    </form>
  );
};
