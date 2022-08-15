import styled from '@emotion/styled';
import { colors } from '../../../shared/colors.styled';

export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  position: relative;
  text-transform: uppercase;
  font-size: 0.9rem;

  &::after {
    position: absolute;
    right: -1rem;
    content: '\\25BC';
    color: ${colors.pastelRed};
  }
`;

export const SortLabel = styled.label`
  color: ${colors.altGrey};
  letter-spacing: 0.1ch;
  white-space: nowrap;
`;

export const SortSelect = styled.select`
  appearance: none;
  border: none;
  background: transparent;
  color: ${colors.white};
  font-size: inherit;
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1ch;
`;
