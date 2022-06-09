import { ReactNode } from 'react'

export const ButtonType = {
    primary: "primary",
    secondary: "secondary",
};

export const ButtonSize = {
    small: "small",
    medium: "medium",
    large: 'large'
};

export const ButtonShape = {
    rectangle: "rectangle",
    round: "round"
};

export interface IButtonProps {
    children: ReactNode,
    onClick: () => void,
    size?: string,
    variant?: string,
    shape?: string,
}