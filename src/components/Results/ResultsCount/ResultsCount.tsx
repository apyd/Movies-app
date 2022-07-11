import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { IPropsResultsCount } from './ResultsCount.types';
import styles from './ResultsCount.scss';

const cx = classNames.bind(styles);

export const ResultsCount: FC<IPropsResultsCount> = ({ value }) => {
  return (
    <span className={cx('results-count')}>
      <span className={cx('results-count--bold')}>{value} </span>
      movies found
    </span>
  );
};
