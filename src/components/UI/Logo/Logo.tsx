import React, { FC } from 'react';
import { LogoSize } from './Logo.const';
import { LogoText, LogoWrapper } from './Logo.styles';
import { ILogoProps } from './Logo.types';

export const Logo: FC<ILogoProps> = ({ size }) => {
  return (
    <LogoWrapper size={size}>
      <LogoText>netflix</LogoText>roulette
    </LogoWrapper>
  );
};

Logo.defaultProps = {
  size: LogoSize.medium
};
