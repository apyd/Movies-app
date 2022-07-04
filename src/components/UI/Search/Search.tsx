import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../Button/Button';
import { ISearchProps } from './Search.types';
import styles from './Search.scss';
import { ButtonType } from '../Button/Button.consts';

const cx = classNames.bind(styles);

export const Search: FC<ISearchProps> = ({
  placeholder = 'What do you want to watch?',
  searchButtonText = 'Search',
  searchRef,
  onSearch
}) => {
  const cx = classNames.bind(styles);
  return (
    <form className={cx('search')} onSubmit={(e) => onSearch(e)}>
      <label htmlFor="search"></label>
      <input type="search" id="search" name="search" placeholder={placeholder} ref={searchRef} />
      <Button type={ButtonType.submit} onClick={() => ''}>
        {searchButtonText}
      </Button>
    </form>
  );
};
