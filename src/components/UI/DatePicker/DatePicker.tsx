import React, { FC, useState } from 'react';
import { InputError } from '../../../shared/error.styled';
import { DatePickerInput, DatePickerLabel } from './DatePicker.styled';
import { IPropsDatePicker } from './DatePicker.types';

export const DatePicker: FC<IPropsDatePicker> = ({
  id,
  name,
  label,
  value,
  touched,
  onBlur,
  onChange,
  error
}) => {
  const [type, setType] = useState<string>('text');

  const onInputFocus = () => {
    setType('date');
  };

  const isInvalid = !!error && touched;

  return (
    <>
      <DatePickerLabel htmlFor={id}>{label.toUpperCase()}</DatePickerLabel>
      <DatePickerInput
        type={type}
        id={id}
        name={name}
        // isInvalid={isInvalid} // TODO
        placeholder="Select date"
        onFocus={onInputFocus}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {isInvalid && <InputError>{error}</InputError>}
    </>
  );
};
