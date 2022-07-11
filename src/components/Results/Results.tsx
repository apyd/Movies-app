import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { useParams, useSearchParams } from "react-router-dom";
import { FILTER_OPTIONS, SORT_OPTIONS } from "../../dictionary/dictionary";
import { useGetMoviesQuery } from "../../store/api/apiSlice";
import { FilterList } from "./Filter/FilterList/FilterList";
import { Sort } from "./Sort/Sort";
import { MemoizedMovieList } from "../Movie/MovieList/MovieList";
import { ResultsCount } from "./ResultsCount/ResultsCount";
import { LoadingSpinner } from "../UI/LoadingSpinner/LoadingSpinner";
import styles from "./Results.scss";
import { Movie } from "../../store/api/apiTypes";

export const Results = () => {
  const [params, setQueryParams] = useSearchParams();
  const genre = params.get("genre");
  const sortBy = params.get("sortBy");
  const movieId = params.get("movieId");
  const { searchQuery } = useParams();
  const [selectedSort, setSelectedSort] = useState(
    sortBy || SORT_OPTIONS[0].value
  );
  const [selectedFilter, setSelectedFilter] = useState(genre || "");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    const selectedMovieId = movieId ? `movieId=${movieId}&` : "";
    const textQuery = searchQuery
      ? `search=${searchQuery}&searchBy=title&`
      : "";
    const sortQuery = `sortBy=${selectedSort}&sortOrder=desc`;
    const filterQuery =
      selectedFilter === FILTER_OPTIONS[0].value
        ? ""
        : `filter=${selectedFilter}&`;
    const query = `${textQuery}${selectedMovieId}${filterQuery}${sortQuery}`;
    setSearchParams(query);
  }, [searchQuery, selectedMovie, selectedFilter, selectedSort]);

  const { data, isLoading, isFetching, isError } =
    useGetMoviesQuery(searchParams);

  const onFilterChange = (selectedFilter: string) => {
    setSelectedFilter(selectedFilter);
    if (!selectedFilter) {
      setQueryParams({ sortBy: selectedSort });
      return;
    }
    setQueryParams({ sortBy: selectedSort, genre: selectedFilter });
  };

  const onSortChange = (selectedSort: string) => {
    setSelectedSort(selectedSort);
    setQueryParams({ sortBy: selectedSort, genre: selectedFilter });
  };

  const onMovieSelect = (selectedMovie: Movie) => {
    setSelectedMovie(selectedMovie);
    setQueryParams({
      sortBy: selectedSort,
      genre: selectedFilter,
      movieId: selectedMovie.id.toString(),
    });
  };

  const cx = classNames.bind(styles);

  return (
    <div className={cx("results")}>
      <div className={cx("results__inner-container")}>
        <div className={cx("results__modifiers")}>
          <FilterList
            selected={selectedFilter}
            options={FILTER_OPTIONS}
            onFilterSelect={onFilterChange}
          />
          <Sort
            selected={selectedSort}
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
            <MemoizedMovieList {...data} onCardClick={onMovieSelect} />
          </>
        )}
      </div>
    </div>
  );
};
