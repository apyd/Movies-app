import React from "react";
import Head from "next/head";
import classNames from "classnames/bind";
import { ErrorBoundary } from "../../../src/hoc/ErrorBoundary/ErrorBoundary";
import { Options } from "../../../src/components/Options/Options";
import { Hero } from "../../../src/components/Hero/Hero";
import { Results } from "../../../src/components/Results/Results";
import { Footer } from "../../../src/components/Footer/Footer";

import styles from "./App.module.scss";

const getAllMoviesURl = "http://localhost:4000/movies";

const cx = classNames.bind(styles);

export default function SearchPage({ data }: any) {
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
          <Hero />
          <Options />
          <Results movies={data.data} />
          <Footer />
        </ErrorBoundary>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(getAllMoviesURl);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
