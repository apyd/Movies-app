import React from 'react';
import classNames from 'classnames/bind';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from '../../store/api/apiSlice';
import { MovieProvider } from '../../context/MovieContext/MovieContext';
import { ErrorBoundary } from '../../hoc/ErrorBoundary/ErrorBoundary';

import { Hero } from '../Hero/Hero';
import { Results } from '../Results/Results';
import { Footer } from '../Footer/Footer';

import styles from './App.scss';

export const App = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx(styles.app)}>
      <ErrorBoundary>
        <Provider store={store}>
          <MovieProvider>
            <Hero />
            <Results />
            <Footer />
          </MovieProvider>
        </Provider>
      </ErrorBoundary>
    </div>
  );
};
