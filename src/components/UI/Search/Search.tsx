import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../Button/Button';
import { ISearchProps } from './Search.types';
import styles from './Search.scss';

export const Search: FC<ISearchProps> = ({
  placeholder = 'What do you want to watch?',
  searchButtonText = 'Search',
  value,
  onChange,
  onSearch
}) => {
  const cx = classNames.bind(styles);
  return (
    <form className={cx('search')} onSubmit={(e) => onSearch(e)}>
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
