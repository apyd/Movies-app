import React from 'react';
import { Logo } from '../UI/Logo/Logo';
import { LogoSize } from '../UI/Logo/Logo.const';
import { footer } from './Footer.styled';

export const Footer = () => {
  return (
    <footer className={footer}>
      <Logo size={LogoSize.small} />
    </footer>
  );
};
