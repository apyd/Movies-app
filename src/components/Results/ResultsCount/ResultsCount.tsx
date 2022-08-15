import React, { FC } from 'react';
import { ResultsCountInnerText, ResultsCountText } from './ResultsCount.styled';
import { IPropsResultsCount } from './ResultsCount.types';

export const ResultsCount: FC<IPropsResultsCount> = ({ value }) => {
  return (
    <ResultsCountText>
      <ResultsCountInnerText>{value} </ResultsCountInnerText>
      movies found
    </ResultsCountText>
  );
};
