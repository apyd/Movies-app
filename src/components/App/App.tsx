import React from 'react';
import classNames from 'classnames/bind';
import { MovieProvider } from '../../context/MovieContext/MovieContext';
import { ErrorBoundary } from '../../hoc/ErrorBoundary/ErrorBoundary';

import { Hero } from '../Hero/Hero';
import { Results } from '../Results/Results';
import { Footer } from '../Footer/Footer';

import styles from './App.scss';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const cx = classNames.bind(styles);

export const App = () => {
  return (
    <div className={cx(styles.app)}>
      <ErrorBoundary>
        <Provider store={store}>
          <MovieProvider>
            {/* <Hero /> */}
            <Results />
            <Footer />
          </MovieProvider>
        </Provider>
      </ErrorBoundary>
    </div>
  );
};
