import styled from '@emotion/styled'
import { colors } from '../../../shared/colors.styled'
import calendar from '../../../assets/calendar-symbol.svg'

export const DatePickerInput = styled.input`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${colors.darkGrey};
  color: ${colors.white};
  font-family: inherit;

  ::placeholder {
    color: ${colors.white};
    text-transform: capitalize;
  }

  ::-webkit-calendar-picker-indicator {
      background-image: url(${calendar.src});
  }
`

export const DatePickerLabel = styled.label`
  display: inline-block;
  margin: 1.5rem 0 0.5rem 0;
  color: ${colors.pastelRed};
  font-weight: bold;
  font-size: 0.8rem;
`