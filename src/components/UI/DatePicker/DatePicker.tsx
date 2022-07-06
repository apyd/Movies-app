import React, { FC, useState } from 'react';
import classNames from 'classnames/bind';
import { IPropsDatePicker } from './DatePicker.types';
import styles from './DatePicker.scss';

export const DatePicker: FC<IPropsDatePicker> = ({ id, name, label, value, onChange, error }) => {
  const [type, setType] = useState<string>('text');

  const onInputFocus = () => {
    setType('date');
  };
  const cx = classNames.bind(styles);
  return (
    <>
      <label htmlFor={id} className={cx('date-picker__label')}>
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={cx('date-picker__input', {
          'date-picker__input--invalid': error
        })}
        placeholder="Select date"
        onFocus={onInputFocus}
        value={value}
        onChange={onChange}
      />
      {error && <span className={cx('input-error')}>{error}</span>}
    </>
  );
};
