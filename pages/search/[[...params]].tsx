import React from 'react';
import Head from 'next/head';
import classNames from 'classnames/bind';
import { ErrorBoundary } from '../../src/hoc/ErrorBoundary/ErrorBoundary';
import { Options } from '../../src/components/Options/Options';
import { Hero } from '../../src/components/Hero/Hero';
import { Results } from '../../src/components/Results/Results';
import { Footer } from '../../src/components/Footer/Footer';

import styles from './App.module.scss';

const cx = classNames.bind(styles);

const getFetchURL = (searchQueryToString: string, queryParamsToString: string) => {
  if (searchQueryToString && queryParamsToString) {
    return `http://localhost:4000/movies?searchBy=title&search=${searchQueryToString}&${queryParamsToString}`;
  } else if (searchQueryToString) {
    return `http://localhost:4000/movies?searchBy=title&search=${searchQueryToString}`;
  } else if (queryParamsToString) {
    return `http://localhost:4000/movies?${queryParamsToString}`;
  }
  return `http://localhost:4000/movies`;
};

export default function SearchPage({ movie, data }: any) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Movie app - search</title>
          <meta name="description" content="Movie app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className={cx(styles.search)}>
        <ErrorBoundary>
          <Hero movie={movie} />
          <Options />
          <Results movies={data?.data} />
          <Footer />
        </ErrorBoundary>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params: searchQuery, ...queryParams } = context.query;
  const { movieId } = queryParams;
  const queryParamsToString = new URLSearchParams(queryParams)
    .toString()
    .replace('genre', 'filter');
  const searchQueryToString = searchQuery?.toString();
  const fetchURL = getFetchURL(searchQueryToString, queryParamsToString);
  const response = await fetch(fetchURL);
  const data = await response.json();
  let movie;
  if (movieId) {
    const movieResponse = await fetch(`http://localhost:4000/movies/${movieId}`);
    movie = await movieResponse.json();
  }

  return {
    props: {
      movie: movie ? movie : null,
      data
    }
  };
}
