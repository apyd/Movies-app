import React from 'react';
import { SpinnerIcon, SpinnerWrapper } from './LoadingSpinner.styled';

export const LoadingSpinner = () => {
  return (
    <SpinnerWrapper>
      <SpinnerIcon></SpinnerIcon>
      <span>Loading...</span>
    </SpinnerWrapper>
  );
};
