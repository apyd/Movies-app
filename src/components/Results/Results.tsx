import React, { FC } from 'react';
import { MovieList } from '../Movie/MovieList/MovieList';
import { ResultsCount } from './ResultsCount/ResultsCount';
import { IResultsProps } from './Results.types';
import { ResultsInnerWrapper, ResultsWrapper } from './Results.styled';

export const Results: FC<IResultsProps> = ({ movies = [] }) => {
  return (
    <ResultsWrapper>
      <ResultsInnerWrapper>
        <ResultsCount value={movies?.length} />
        <MovieList movies={movies} />
      </ResultsInnerWrapper>
    </ResultsWrapper>
  );
};
