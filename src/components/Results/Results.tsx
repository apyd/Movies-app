import React, { useMemo, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetMoviesQuery } from '../../store/api/apiSlice';
import { MovieList } from '../Movie/MovieList/MovieList';
import { ResultsCount } from './ResultsCount/ResultsCount';
import { LoadingSpinner } from '../UI/LoadingSpinner/LoadingSpinner';
import styles from './Results.scss';

const cx = classNames.bind(styles);

export const Results = () => {
  const [params] = useSearchParams();
  const { searchQuery } = useParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const queryParams = { ...Object.fromEntries(params) };
    const { movieId, ...filteredQuery } = queryParams;
    const updatedQueryParams = new URLSearchParams(filteredQuery)
      .toString()
      .replace('genre', 'filter');
    const updatedQuery = searchQuery
      ? `search=${searchQuery}&searchBy=title&${updatedQueryParams}`
      : `${updatedQueryParams}`;
    setQuery(updatedQuery);
  }, [params, searchQuery]);

  const { data, isLoading, isError, isSuccess } = useGetMoviesQuery(query);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <div className={cx('results')}>
      <div className={cx('results__inner-container')}>
        {isLoading && <LoadingSpinner />}
        {isError && <p>Data can't be loaded, please contact administrator</p>}
        {isSuccess && memoizedData?.data?.length >= 0 && (
          <>
            <ResultsCount value={memoizedData?.data?.length} />
            <MovieList movies={...memoizedData?.data} />
          </>
        )}
      </div>
    </div>
  );
};
