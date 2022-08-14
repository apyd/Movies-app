import React from 'react';
import type { AppProps } from 'next/app';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Global, css } from '@emotion/react';
import { apiSlice } from '../src/store/api/apiSlice';
import { MovieProvider } from '../src/context/MovieContext/MovieContext';
import { colors } from '../src/shared/colors.styled';

function MyApp({ Component, pageProps }: any) {
  return (
    <ApiProvider api={apiSlice}>
      <MovieProvider>
        <Global
          styles={css`
            html {
              font-size: 0.8rem;
              font-size: clamp(0.8rem, 0.73rem + 0.329vw, 1.125rem);
              height: 100%;
            }

            body {
              margin: 0;
              font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background-color: ${colors.dark};
              color: ${colors.white};
              height: 100%;
            }

            #__next {
              height: 100%;
            }
          `}
        />
        <Component {...pageProps} />
      </MovieProvider>
    </ApiProvider>
  );
}

export default MyApp;
