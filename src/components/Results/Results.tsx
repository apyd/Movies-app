import React, { useState, useEffect } from 'react';
import { FILTER_OPTIONS, SORT_OPTIONS } from '../../api/resultsData';
import { useGetMoviesQuery } from '../../store/api/apiSlice';

import { FilterList } from './Filter/FilterList/FilterList';
import { Sort } from './Sort/Sort';
import { MovieList } from '../Movie/MovieList/MovieList';
import { ResultsCount } from './ResultsCount/ResultsCount';
import { LoadingSpinner } from '../UI/LoadingSpinner/LoadingSpinner';

import './Results.scss';

export const Results = () => {
  const [filter, setFilter] = useState(FILTER_OPTIONS[0].value);
  const [sort, setSort] = useState(SORT_OPTIONS[0].value);
  const defaultQueryParams = `?sortBy=${sort}&sortOrder=asc`;
  const [queryParams, setQueryParams] = useState(defaultQueryParams);

  useEffect(() => {
    if (filter !== FILTER_OPTIONS[0].value) {
      setQueryParams(`?filter=${filter}&sortBy=${sort}&sortOrder=asc`);
    } else {
      setQueryParams(`?sortBy=${sort}&sortOrder=asc`);
    }
  }, [filter, sort]);

  const { data, isLoading, isFetching, isError } = useGetMoviesQuery(queryParams);

  return (
    <div className="results">
      <div className="results__inner-container">
        <div className="results__modifiers">
          <FilterList options={FILTER_OPTIONS} onFilterSelect={setFilter} />
          <Sort options={SORT_OPTIONS} onOptionChange={setSort} sortLabel="Sort by" />
        </div>
        {isLoading || (isFetching && <LoadingSpinner />)}
        {isError && <p>Data can't be loaded, please contact administrator</p>}
        {data && (
          <>
            <ResultsCount value={data.data.length} />
            <MovieList {...data} />
          </>
        )}
      </div>
    </div>
  );
};
