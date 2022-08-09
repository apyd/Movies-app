import React from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { Button } from '../UI/Button/Button';
import { Logo } from '../UI/Logo/Logo';
import styles from './NotFound.scss';

export const NotFound = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate('/search');
  };

  return (
    <section className={cx('not-found')}>
      <Logo />
      <h3>404 - Page not found</h3>
      <p>Oops... looks like this page doesn't exist</p>
      <Button onClick={navigateToSearch}>Go back to home page</Button>
    </section>
  );
};
