import React, { FC } from 'react';
import { IPropsResultsCount } from './ResultsCount.types';
import './ResultsCount.scss';

export const ResultsCount: FC<IPropsResultsCount> = ({ value }) => {
  return (
    <span className="results-count">
      <span className="results-count--bold">{value} </span>
      movies found
    </span>
  );
};
