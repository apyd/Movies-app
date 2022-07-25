import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { searchTextSelector, sortSelector, filterSelector } from '../../store/store';
import { useGetMoviesQuery } from '../../store/api/apiSlice';
import { FILTER_OPTIONS } from '../../dictionary/dictionary';
import { MovieList } from '../Movie/MovieList/MovieList';
import { ResultsCount } from './ResultsCount/ResultsCount';
import { LoadingSpinner } from '../UI/LoadingSpinner/LoadingSpinner';
import styles from './Results.scss';

const cx = classNames.bind(styles);

export const Results = () => {
  const searchText = useSelector(searchTextSelector);
  const filter = useSelector(filterSelector);
  const sort = useSelector(sortSelector);
  const dispatch = useDispatch();
  let defaultQueryParams = `?sortBy=${sort}&sortOrder=asc`;
  const [queryParams, setQueryParams] = useState(defaultQueryParams);

  useEffect(() => {
    const searchQuery = searchText.trim().length > 0 ? `search=${searchText}&searchBy=title&` : '';
    const sortQuery = `sortBy=${sort}&sortOrder=desc`;
    const filterQuery = filter === FILTER_OPTIONS[0].value ? '' : `filter=${filter}&`;
    const query = `?${searchQuery}${filterQuery}${sortQuery}`;
    setQueryParams(query);
  }, [searchText, filter, sort]);

  const { data, isLoading, isFetching, isError } = useGetMoviesQuery(queryParams);

  return (
    <div className={cx('results')}>
      <div className={cx('results__inner-container')}>
        {isLoading || (isFetching && <LoadingSpinner />)}
        {isError && <p>Data can't be loaded, please contact administrator</p>}
        {data?.data?.length >= 0 && (
          <>
            <ResultsCount value={data?.data?.length} />
            <MovieList movies={data?.data} />
          </>
        )}
      </div>
    </div>
  );
};
