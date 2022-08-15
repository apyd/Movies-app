import styled from '@emotion/styled'
import { colors } from '../../../shared/colors.styled'

interface TextareaElementProps {
  isInvalid: boolean
}

export const TextareaLabel = styled.label`
  display: inline-block;
  margin: 1.5rem 0 0.5rem 0;
  color: ${colors.pastelRed};
  font-weight: bold;
  font-size: 0.8rem;
`

export const TextareaElement = styled.textarea<TextareaElementProps>`
  padding: 0.5rem 1rem;
  background-color: ${colors.darkGrey};
  color: ${(props) => props.isInvalid ? `${colors.pastelRed}` : `${colors.white}`};
  border: ${(props) => props.isInvalid ? `1px solid ${colors.pastelRed};` : 'none'};
  font-family: inherit;

  &::placeholder {
    color: ${(props) => props.isInvalid ? `${colors.pastelRed}` : `${colors.white}`};
    text-transform: capitalize;
  }
`