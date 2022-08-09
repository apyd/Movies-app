import { ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  size?: string;
  variant?: string;
  shape?: string;
  isDisabled?: boolean;
}
