import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { IPropsTextInput } from './TextInput.types';
import styles from './TextInput.scss';

export const TextInput: FC<IPropsTextInput> = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  label,
  errorText
}) => {
  const cx = classNames.bind(styles);
  return (
    <>
      <label htmlFor={id} className={cx('text-label')}>
        {label.toUpperCase()}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className={cx('text-input')}
        value={value}
        onChange={onChange}
      />
      <span className={cx('text-input__error')}>{errorText}</span>
    </>
  );
};
