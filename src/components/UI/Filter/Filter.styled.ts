import styled from '@emotion/styled'
import { colors } from '../../../shared/colors.styled'

export const FilterLabel = styled.label`
  display: inline-block;
  position: relative;
  padding: 0.5rem 0.8rem;
  text-transform: uppercase;
`

export const FilterInput = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
`

/* &:checked + ${FilterLabel}:after {
  height: 0.2rem;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: ${colors.pastelRed};
  z-index: 10;
}   */