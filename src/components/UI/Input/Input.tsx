import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { IPropsInput } from './Input.types';
import styles from './Input.scss';

export const Input: FC<IPropsInput> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  label,
  error
}) => {
  const cx = classNames.bind(styles);
  return (
    <>
      <label htmlFor={id} className={cx('text-label')}>
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={cx('input', { 'input--invalid': error })}
        value={value}
        onChange={onChange}
      />
      {error && <span className={cx('input-error')}>{error}</span>}
    </>
  );
};
