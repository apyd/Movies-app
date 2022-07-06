import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { searchTextSelector, sortSelector, filterSelector } from '../../store/store';
import { useGetMoviesQuery } from '../../store/api/apiSlice';
import { SORT_OPTIONS } from '../../dictionary/dictionary';
import { MovieList } from '../Movie/MovieList/MovieList';
import { ResultsCount } from './ResultsCount/ResultsCount';
import { LoadingSpinner } from '../UI/LoadingSpinner/LoadingSpinner';
import styles from './Results.scss';

const cx = classNames.bind(styles);

export const Results = () => {
  const searchText = useSelector(searchTextSelector);
  const filter = useSelector(filterSelector);
  const sort = useSelector(sortSelector);
  let searchQuery = '';
  let sortQuery = '';
  let filterQuery = '';
  let defaultQueryParams = `?sortBy=${SORT_OPTIONS[0].value}&sortOrder=asc`;
  const [queryParams, setQueryParams] = useState(defaultQueryParams);

  useEffect(() => {
    if (searchQuery !== searchText) {
      searchQuery = `search=${searchText}&searchBy=title&`;
    }
    if (filterQuery !== filter) {
      filterQuery = `filter=${filter}&`;
    }
    if (sortQuery !== sort) {
      sortQuery = `sortBy=${sort}&sortOrder=desc`;
    }
    const query = `?${searchQuery}${filterQuery}${sortQuery}`;
    setQueryParams(query);
  }, [searchText, filter, sort]);

  const { data, isLoading, isSuccess, isError } = useGetMoviesQuery(queryParams);

  const memoizedData = useMemo(() => data, [data]);

  const onFilterChange = (selectedFilter: string) => {
    dispatch(updateFilter(selectedFilter));
  };

  const onSortChange = (selectedSort: string) => {
    dispatch(updateSort(selectedSort));
  };

  const cx = classNames.bind(styles);

  return (
    <div className={cx('results')}>
      <div className={cx('results__inner-container')}>
        {isLoading && <LoadingSpinner />}
        {isError && <p>Data can't be loaded, please contact administrator</p>}
        {isSuccess && memoizedData?.data?.length >= 0 && (
          <>
            <ResultsCount value={memoizedData?.data?.length} />
            <MovieList movies={memoizedData?.data} />
          </>
        )}
      </div>
    </div>
  );
};
