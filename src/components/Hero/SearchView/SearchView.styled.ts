import styled from '@emotion/styled';
import { variables } from '../../../shared/variables.styled';

export const SearchViewWrapper = styled.div`
  width: 100%;
`;

export const TopBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchViewContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 0.5rem 0;
  flex: 1;
  max-width: 1024px;
  margin: ${variables.marginCenterVertically};
  padding: 3rem 1rem;
`;

export const SearchHeading = styled.h1`
  font-weight: 400;
  letter-spacing: 0.1ch;
`;
