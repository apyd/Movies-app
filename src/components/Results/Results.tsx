import React from "react";
import { FilterList } from "./Filter/FilterList/FilterList";
import { Sort } from "./Sort/Sort";
import { MovieList } from "../Movie/MovieList/MovieList";
import {
  FILTER_DATA,
  SORT_OPTIONS,
  RESULTS,
  RESULTS_COUNT,
} from "../../api/resultsData";
import { ResultsCount } from "./ResultsCount/ResultsCount";
import "./Results.scss";

export const Results = () => {
  return (
    <div className="results">
      <div className="results__inner-container">
        <div className="results__modifiers">
          <FilterList {...FILTER_DATA} />
          <Sort
            options={SORT_OPTIONS}
            onOptionChange={() => {}}
            sortLabel="Sort by"
          />
        </div>
        <ResultsCount value={RESULTS_COUNT} />
        <MovieList {...RESULTS} />
      </div>
    </div>
  );
};
