import React, { FC } from 'react';
import { IButtonProps } from './Button.types';
import { ButtonSize, ButtonShape, ButtonVariant } from './Button.consts';
import { StyledButton } from './Button.styles';

export const Button: FC<IButtonProps> = ({
  children,
  id = 'button',
  onClick,
  size = ButtonSize.medium,
  variant = ButtonVariant.primary,
  shape = ButtonShape.rectangle,
  type,
  isDisabled = false
}) => {
  return (
    <StyledButton
      id={id}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      size={size}
      variant={variant}
      shape={shape}
    >
      {children}
    </StyledButton>
  );
};
