import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from '../../src/components/UI/Button/Button';
import { Logo } from '../../src/components/UI/Logo/Logo';

import { notFound } from './notFound.styled';

export default function Custom404() {
  const router = useRouter();

  const navigateToSearch = () => {
    router.push('/search');
  };

  return (
    <>
      <Head>
        <title>404 - Page not found</title>
        <meta name="description" content="Movie app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={notFound}>
        <Logo />
        <h3>404 - Page not found</h3>
        <p>Oops... looks like this page doesn't exist</p>
        <Button onClick={navigateToSearch}>Go back to home page</Button>
      </section>
    </>
  );
}
