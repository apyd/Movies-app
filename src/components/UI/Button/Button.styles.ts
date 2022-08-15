import styled from '@emotion/styled';
import { buttonStyles } from './Button.consts';
import { StyledButtonProps } from './Button.types';

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  
  background-color: ${(props) =>
    // @ts-expect-error: Unreachable code error
    buttonStyles[props.variant as keyof typeof buttonStyles].backgroundColor};
  color: ${(props) => // @ts-expect-error: Unreachable code error 
    buttonStyles[props.variant as keyof typeof buttonStyles].color};
  border: ${(props) =>
    // @ts-expect-error: Unreachable code error
    buttonStyles[props.variant as keyof typeof buttonStyles].border};
  padding: ${(props) =>
    // @ts-expect-error: Unreachable code error 
    buttonStyles[props.size as keyof typeof buttonStyles].padding};
    `;
