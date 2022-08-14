import { colors } from '../../../shared/colors.styled'

export const ButtonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  ghost: 'ghost',
  outline: 'outline'
};

export const ButtonSize = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

export const ButtonShape = {
  rectangle: 'rectangle',
  round: 'round'
};

export const buttonStyles = {
  'primary': {
    backgroundColor: colors.pastelRed,
    color: colors.white,
    border: 'none',
    hoverBg: colors.pastelRedBgHover,
    activeBg: colors.pastelRedBgActive
  },
  'secondary': {
    backgroundColor: colors.lightGrey,
    color: colors.pastelRed,
    border: 'none',
    hoverBg: colors.lightGreyBgHover,
    activeBg: colors.lightGreyBgActive
  },
  'ghost': {
    backgroundColor: 'transparent',
    color: colors.pastelRed,
    border: 'none',
    hoverBg: colors.lightGreyBgHover,
    activeBg: colors.lightGrey
  },
  'outline': {
    backgroundColor: 'transparent',
    color: colors.pastelRed,
    border: 'none',
    hoverBg: colors.lightGreyBgHover,
    activeBg: colors.lightGrey
  },
  'small': {
    padding: '0.2rem 0.4rem'
  },
  'medium': {
    padding: '0.6rem 0.8rem'
  },
  'large': {
    padding: '1rem 3rem'
  },
  'round': {
    padding: '0.3rem',
    borderRadius: '50%'
  },
}