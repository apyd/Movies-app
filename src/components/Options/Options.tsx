import React, { useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { FILTER_OPTIONS, SORT_OPTIONS } from '../../dictionary/dictionary';
import { FilterList } from '../UI/Filter/FilterList/FilterList';
import { Sort } from '../UI/Sort/Sort';
import styles from './Options.module.scss';

const cx = classNames.bind(styles);

export const Options = () => {
  const router = useRouter();
  const { params: searchParams, ...queryParams } = router?.query;
  const { genre, sortBy } = queryParams;
  const searchQuery = searchParams?.toString() || '';

  const defaultFilter = typeof genre === 'string' ? genre : genre?.[genre?.length - 1];
  const defaultSort = typeof sortBy === 'string' ? sortBy : sortBy?.[sortBy?.length - 1];

  const [filter, setFilter] = useState(defaultFilter ?? `${FILTER_OPTIONS[0].value}`);
  const [sort, setSort] = useState(defaultSort ?? `${SORT_OPTIONS[0].value}`);

  const updateRoute = (queryParamToUpdate: {}, queryParams: {}, searchQuery: string) => {
    const updatedQueryParams = new URLSearchParams({
      ...queryParams,
      ...queryParamToUpdate
    }).toString();
    searchQuery
      ? router.push(`/search/${searchQuery}?${updatedQueryParams}`)
      : router.push(`/search/?${updatedQueryParams}`);
  };

  const onFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
    updateRoute({ genre: selectedFilter }, queryParams, searchQuery);
  };

  const onSortChange = (selectedSort: string) => {
    setSort(selectedSort);
    updateRoute({ sortBy: selectedSort }, queryParams, searchQuery);
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
