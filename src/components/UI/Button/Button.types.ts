import { ReactNode } from 'react'

export interface IButtonProps {
    children: ReactNode,
    onClick: () => void,
    size?: string,
    variant?: string,
    shape?: string,
}