import React from 'react';
import classNames from 'classnames/bind';
import { Logo } from '../Logo/Logo';
import { LogoSize } from '../Logo/Logo.const';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

export const Footer = () => {
  return (
    <footer className={cx(styles.footer)}>
      <Logo size={LogoSize.small} />
    </footer>
  );
};
