import React, { useMemo, useEffect, useState } from "react";
import classNames from "classnames/bind";
import { MovieList } from "../Movie/MovieList/MovieList";
import { ResultsCount } from "./ResultsCount/ResultsCount";
import styles from "./Results.module.scss";

const cx = classNames.bind(styles);

export const Results = ({ movies }: any) => {
  return (
    <div className={cx("results")}>
      <div className={cx("results__inner-container")}>
        <ResultsCount value={movies?.length} />
        <MovieList movies={movies} />
      </div>
    </div>
  );
};
