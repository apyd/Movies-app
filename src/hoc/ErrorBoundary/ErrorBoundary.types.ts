import { ReactNode } from 'react';

export interface IErrorProps {
  children: ReactNode;
}

export interface IErrorState {
  hasError: boolean;
  error: Error;
}
