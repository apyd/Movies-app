import styled from '@emotion/styled';
import { colors } from '../../../shared/colors.styled';

export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerIcon = styled.div`
  height: 80px;
  width: 80px;
  border: 10px solid ${colors.altGrey};
  border-top: 10px solid ${colors.pastelRed};
  border-radius: 50%;
  animation: spin 1s linear infinite;
`;
