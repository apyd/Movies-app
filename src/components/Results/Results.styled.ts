import styled from '@emotion/styled';
import { variables } from '../../shared/variables.styled';

export const ResultsWrapper = styled.div`
  height: 100%;
  padding: 0 1rem;
  margin: 1rem 0 3rem 0;

  @media screen and (max-width: 550px) {
    height: unset;
  }
`;

export const ResultsInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${variables.sectionMaxWidth};
  margin: 0 auto;
`;
