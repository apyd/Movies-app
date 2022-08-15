import styled from '@emotion/styled';
import { colors } from '../../../shared/colors.styled';

export const ContextMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.5rem 0.5rem;
`;

export const ContextMenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${colors.lightGrey};
  z-index: 10;
  left: -30%;
  transform: translateX(-30%);
`;
