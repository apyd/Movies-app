import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { IButtonProps } from './Button.types';
import { ButtonType, ButtonSize, ButtonShape, ButtonVariant } from './Button.consts';
import styles from './Button.scss';

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  size = ButtonSize.medium,
  variant = ButtonVariant.primary,
  shape = ButtonShape.rectangle,
  type = ButtonType.button
}) => {
  const cx = classNames.bind(styles);
  return (
    <button
      type={type}
      className={cx(styles.btn, [
        styles[`btn--${variant}`],
        styles[`btn--${size}`],
        styles[`btn--${shape}`]
      ])}
      onClick={() => onClick()}>
      {children}
    </button>
  );
};
