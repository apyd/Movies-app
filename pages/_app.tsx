import React from 'react';
import type { AppProps } from 'next/app';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from '../src/store/api/apiSlice';
import { MovieProvider } from '../src/context/MovieContext/MovieContext';

import '../src/styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={apiSlice}>
      <MovieProvider>
        <Component {...pageProps} />
      </MovieProvider>
    </ApiProvider>
  );
}

export default MyApp;
