import React from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { FILTER_OPTIONS, SORT_OPTIONS } from '../../dictionary/dictionary';
import { updateFilter, updateSort } from '../../store/api/querySlice';
import { FilterList } from '../UI/Filter/FilterList/FilterList';
import { Sort } from '../UI/Sort/Sort';
import styles from './Options.scss';

const cx = classNames.bind(styles);

export const Options = () => {
  const dispatch = useDispatch();

  const onFilterChange = (selectedFilter: string) => {
    dispatch(updateFilter(selectedFilter));
  };

  const onSortChange = (selectedSort: string) => {
    dispatch(updateSort(selectedSort));
  };

  return (
    <div className={cx('options')}>
      <div className={cx('options-wrapper')}>
        <FilterList options={FILTER_OPTIONS} onFilterSelect={onFilterChange} />
        <Sort options={SORT_OPTIONS} onOptionChange={onSortChange} sortLabel="Sort by" />
      </div>
    </div>
  );
};
