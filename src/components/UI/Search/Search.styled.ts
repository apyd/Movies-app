import styled from '@emotion/styled'
import { variables } from '../../../shared/variables.styled'
import { colors } from '../../../shared/colors.styled'

export const SearchWrapper = styled.form`
  display: flex;
`

export const SearchInput = styled.input`
    height: 100%;
    width: 100%;
    padding: ${variables.sectionPadding};
    margin-right: 0.5rem;
    border: 1px solid ${colors.darkGrey};
    border-radius: 3px;
    background-color: ${colors.dark};
    color: ${colors.white};
    font-size: inherit;
    font-family: inherit;
  }

  &::placeholder {
    color: inherit;
    font-family: inherit;
  }
`