import styled from '@emotion/styled';
import { colors } from '../../../shared/colors.styled';

export interface MultiSelectWrapperProps {
  isInvalid: boolean;
}

export const MultiSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const MultiSelectOptions = styled.ul`
  position: absolute;
  width: inherit;
  margin: 0;
  padding: 0.5rem 0;
  background-color: ${colors.dark};
  accent-color: red;
`;

export const MultiSelectOption = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem 0;
  margin: 0;
  font-family: inherit;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkGrey};
  }
`;

export const MultiSelectLabel = styled.span`
  display: inline-block;
  margin: 1.5rem 0 0.5rem 0;
  color: ${colors.pastelRed};
  font-family: inherit;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const MultiSelectSummary = styled.span<MultiSelectWrapperProps>`
  font-size: 0.8rem;
  font-family: inherit;
  color: ${(props) => (props.isInvalid ? `${colors.pastelRed}` : 'inherit')};
`;

export const MultiSelectSelected = styled.div<MultiSelectWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 0 1rem;
  background-color: ${colors.darkGrey};
  border: ${(props) => (props.isInvalid ? `1px solid ${colors.pastelRed}` : 'none')};
`;
