import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useSearchParams } from 'react-router-dom';
import { FILTER_OPTIONS, SORT_OPTIONS } from '../../dictionary/dictionary';
import { FilterList } from '../UI/Filter/FilterList/FilterList';
import { Sort } from '../UI/Sort/Sort';
import styles from './Options.scss';

const cx = classNames.bind(styles);

export const Options = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [params, setQueryParams] = useSearchParams();

  const onFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
    if (!selectedFilter) {
      setQueryParams({ sortBy: sort });
      return;
    }
    setQueryParams({ sortBy: sort, genre: selectedFilter });
  };

  const onSortChange = (selectedSort: string) => {
    setSort(selectedSort);
    setQueryParams({ sortBy: selectedSort, genre: filter });
  };

  return (
    <div className={cx('options')}>
      <div className={cx('options-wrapper')}>
        <FilterList selected={filter} options={FILTER_OPTIONS} onFilterSelect={onFilterChange} />
        <Sort
          selected={sort}
          options={SORT_OPTIONS}
          onOptionChange={onSortChange}
          sortLabel="Sort by"
        />
      </div>
    </div>
  );
};
