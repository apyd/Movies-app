import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { Logo } from '../../UI/Logo/Logo';
import { Button } from '../../UI/Button/Button';
import { Search } from '../../UI/Search/Search';
import { ButtonVariant } from '../../UI/Button/Button.consts';
import { ISearchViewProps } from './SearchView.types';
import styles from './SearchView.scss';

const cx = classNames.bind(styles);

export const SearchView: FC<ISearchViewProps> = ({ toggleModal, inputRef, onSearch }) => {
  return (
    <div className={cx('search-view')}>
      <div className={cx('search-view__top-banner')}>
        <Logo />
        <Button variant={ButtonVariant.secondary} onClick={toggleModal}>
          + ADD MOVIE
        </Button>
      </div>
      <section className={cx('search-view__content')}>
        <h1 className={cx('search__heading')}>FIND YOUR MOVIE</h1>
        <Search searchRef={inputRef} onSearch={onSearch} />
      </section>
    </div>
  );
};
