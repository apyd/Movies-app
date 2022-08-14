import styled from '@emotion/styled'
import { buttonStyles } from './Button.consts'
import { IButtonProps } from './Button.types'

export const StyledButton = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`


/* background-color: ${(props) => buttonStyles[props.variant].backgroundColor};
color: ${(props) => buttonStyles[props.variant].backgroundColor}; */
/* border: ${(props) => props.variant};
padding: ${(props) => props.size}; */