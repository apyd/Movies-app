import { ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  onClick: any;
  size?: string;
  variant?: string;
  shape?: string;
}
