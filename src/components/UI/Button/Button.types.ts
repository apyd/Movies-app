import { ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  id?: string,
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  size?: string;
  variant?: string;
  shape?: string;
  isDisabled?: boolean;
}
