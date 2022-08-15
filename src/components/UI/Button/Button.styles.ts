import styled from '@emotion/styled'
import { buttonStyles } from './Button.consts'
import { StyledButtonProps } from './Button.types'

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  /* @ts-ignore */
  background-color: ${(props) => buttonStyles[props.variant as keyof typeof buttonStyles].backgroundColor};
  /* @ts-ignore */
  color: ${(props) => buttonStyles[props.variant as keyof typeof buttonStyles].color};
  /* @ts-ignore */
  border: ${(props) => buttonStyles[props.variant as keyof typeof buttonStyles].border};
  /* @ts-ignore */
  padding: ${(props) => buttonStyles[props.size as keyof typeof buttonStyles].padding};
`
