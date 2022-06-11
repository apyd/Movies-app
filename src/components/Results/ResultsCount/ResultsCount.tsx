import React, { FC } from 'react'
import { IPropsResultsCount } from './ResultsCount.types'
import './ResultsCount.scss';

const ResultsCount: FC<IPropsResultsCount> = ({value}) => {
  return (
    <span className="results-count">
      <span className="results-count--bold">{value} </span>
      movies found
    </span>
  )
}

export default ResultsCount