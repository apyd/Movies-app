import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from '../../src/components/UI/Button/Button';
import { Logo } from '../../src/components/UI/Logo/Logo';
import { css } from '@emotion/css';

const notFound = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1%;
  width: 25%;
  min-width: 300px;
  max-width: 400px;
  height: 100%;
  text-align: center;
  margin: 0 auto;
`;

import { LogoSize } from '../../src/components/UI/Logo/Logo.const';
import {
  ButtonShape,
  ButtonSize,
  ButtonVariant
} from '../../src/components/UI/Button/Button.consts';

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
        <Logo size={LogoSize.medium} />
        <h3>404 - Page not found</h3>
        <p>Oops... looks like this page doesn't exist</p>
        <Button
          size={ButtonSize.medium}
          shape={ButtonShape.rectangle}
          variant={ButtonVariant.primary}
          onClick={navigateToSearch}>
          Go back to home page
        </Button>
      </section>
    </>
  );
}
