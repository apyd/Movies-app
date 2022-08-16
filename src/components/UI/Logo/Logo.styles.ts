import styled from '@emotion/styled';
import { colors } from '../../../shared/colors.styled';
import { LogoSize } from './Logo.const';

export interface LogoWrapperProps {
  size: string;
}

export const LogoWrapper = styled.span<LogoWrapperProps>`
  color: ${colors.pastelRed};
  font-size: ${(props) => (props.size === LogoSize.medium ? '1.4rem' : '1rem')};
`;

export const LogoText = styled.span`
  font-weight: 900;
`;
