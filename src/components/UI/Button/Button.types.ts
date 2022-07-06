import { ReactNode } from 'react'

export interface IButtonProps {
  children: ReactNode,
  onClick: any, // FIX IT
  type?: any, //FIX IT
  size?: string,
  variant?: string,
  shape?: string,
  isDisabled?: boolean,
}