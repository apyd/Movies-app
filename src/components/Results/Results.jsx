import React, { useState } from "react";

import {
  FILTER_DATA,
  SORT_OPTIONS,
} from "../../api/resultsData";

import { FilterList } from "./Filter/FilterList/FilterList";
import { Sort } from "./Sort/Sort";
import { MovieList } from "../Movie/MovieList/MovieList";
import { ResultsCount } from "./ResultsCount/ResultsCount";
import "./Results.scss";
import { useGetMoviesQuery } from "../../store/api/apiSlice";
import { LoadingSpinner } from "../UI/LoadingSpinner/LoadingSpinner";

export const Results = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedOrderBy, setSelectedOrderBy] = useState(null);
  const { data, isLoading, isError } = useGetMoviesQuery(selectedFilter, selectedOrderBy);

  let results;
  if (isLoading) {
    results = <LoadingSpinner />
  }
  else if (isError) {
    results = <p>Error</p>
  }
  else {
    results =
      <>
        <ResultsCount value={data.data.length} />
        <MovieList {...data} />
      </>
  }

  return (
    <div className="results">
      <div className="results__inner-container">
        <div className="results__modifiers">
          <FilterList {...FILTER_DATA} />
          <Sort
            options={SORT_OPTIONS}
            onOptionChange={() => { }}
            sortLabel="Sort by"
          />
        </div>
        {data && results}
      </div>
    </div>
  );
};
