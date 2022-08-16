import styled from '@emotion/styled';
import { colors } from '../../shared/colors.styled';
import { variables } from '../../shared/variables.styled';

export const Overlay = styled.form`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.lightGrey};
  opacity: 0.9;
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(300px, 85vw, 600px);
  min-height: 200px;
  padding: 1.5rem;
  overflow: auto;
  background-color: ${colors.dark};
  box-shadow: ${variables.modalBoxShadow};
  z-index: 100;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
