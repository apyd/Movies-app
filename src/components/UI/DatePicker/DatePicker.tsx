import React, { FC, useState } from 'react';
import { IPropsDatePicker } from './DatePicker.types';
import './DatePicker.scss';

export const DatePicker: FC<IPropsDatePicker> = ({ id, name, label }) => {
  const [type, setType] = useState<string>('text');

  const onInputFocus = () => {
    setType('date');
  };

  return (
    <>
      <label htmlFor={id} className="date-picker__label">
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="date-picker__input"
        placeholder="Select date"
        onFocus={onInputFocus}
      />
    </>
  );
};
