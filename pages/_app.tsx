import '../src/styles/global.scss';
import type { AppProps } from 'next/app';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from '../src/store/api/apiSlice';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={apiSlice}>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default MyApp;
