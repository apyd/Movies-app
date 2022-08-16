import styled from '@emotion/styled';
import { colors } from '../../shared/colors.styled';

export const OptionsWrapper = styled.div`
  padding: 0 1rem;
  margin: 1rem 0 0 0;

  @media screen and (max-width: 550px) {
    height: unset;
  }
`;

export const OptionsInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0.8rem 1rem 0.8rem 0;
  max-width: 1280px;
  margin: 0 auto;

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.2rem;
    height: 0.1rem;
    content: '';
    background-color: ${colors.lightGrey};
  }
`;
