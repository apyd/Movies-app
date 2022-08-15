import styled from '@emotion/styled'
import { colors } from '../../../shared/colors.styled'
import { InputElementProps } from './Input.types'


export const InputElement = styled.input<InputElementProps>`
  appearance: none;
  min-width: 100px;
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${colors.darkGrey};
  color: ${(props) => props.isInvalid ? `${colors.pastelRed}` : `${colors.white}`};
  border: ${(props) => props.isInvalid ? `1px solid ${colors.pastelRed}` : 'none'};

  ::placeholder {
    color: ${(props) => props.isInvalid ? `${colors.pastelRed}` : `${colors.white}`};
    text-transform: capitalize;
  }
`

export const Label = styled.label`
  display: inline-block;
  margin: 1.5rem 0 0.5rem 0;
  color: ${colors.pastelRed};
  font-size: 0.8rem;
  font-weight: bold;
`