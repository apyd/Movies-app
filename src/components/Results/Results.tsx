import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { querySelector } from "../../store/store";
import { updateSort, updateFilter } from "../../store/api/querySlice";
import { FILTER_OPTIONS, SORT_OPTIONS } from "../../dictionary/dictionary";
import { useGetMoviesQuery } from "../../store/api/apiSlice";
import { FilterList } from "./Filter/FilterList/FilterList";
import { Sort } from "./Sort/Sort";
import { MemoizedMovieList } from "../Movie/MovieList/MovieList";
import { ResultsCount } from "./ResultsCount/ResultsCount";
import { LoadingSpinner } from "../UI/LoadingSpinner/LoadingSpinner";
import styles from "./Results.scss";

export const Results = () => {
  const { searchText, filter, sort } = useSelector(querySelector);
  const dispatch = useDispatch();
  let defaultQueryParams = `?sortBy=${sort}&sortOrder=asc`;
  const [queryParams, setQueryParams] = useState(defaultQueryParams);

  useEffect(() => {
    const searchQuery =
      searchText.trim().length > 0
        ? `search=${searchText}&searchBy=title&`
        : "";
    const sortQuery = `sortBy=${sort}&sortOrder=asc`;
    const filterQuery =
      filter === FILTER_OPTIONS[0].value ? "" : `filter=${filter}&`;
    const query = `?${searchQuery}${filterQuery}${sortQuery}`;
    setQueryParams(query);
  }, [searchText, filter, sort]);

  console.log(queryParams);

  const { data, isLoading, isFetching, isError } =
    useGetMoviesQuery(queryParams);

  const onFilterChange = (selectedFilter: string) => {
    dispatch(updateFilter(selectedFilter));
  };

  const onSortChange = (selectedSort: string) => {
    dispatch(updateSort(selectedSort));
  };

  const cx = classNames.bind(styles);

  return (
    <div className={cx("results")}>
      <div className={cx("results__inner-container")}>
        <div className={cx("results__modifiers")}>
          <FilterList
            options={FILTER_OPTIONS}
            onFilterSelect={onFilterChange}
          />
          <Sort
            options={SORT_OPTIONS}
            onOptionChange={onSortChange}
            sortLabel="Sort by"
          />
        </div>
        {isLoading || (isFetching && <LoadingSpinner />)}
        {isError && <p>Data can't be loaded, please contact administrator</p>}
        {data && (
          <>
            <ResultsCount value={data.data.length} />
            <MemoizedMovieList {...data} />
          </>
        )}
      </div>
    </div>
  );
};
