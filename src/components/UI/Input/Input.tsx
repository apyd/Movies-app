import React, { FC } from 'react';
import { IPropsInput } from './Input.types';
import { Label, InputElement } from './Input.styled';
import { InputError } from '../../../shared/error.styled';

export const Input: FC<IPropsInput> = ({
  id,
  name,
  value,
  touched,
  onBlur,
  onChange,
  placeholder,
  type = 'text',
  label,
  error
}) => {
  const isInvalid = !!error && touched;

  return (
    <>
      <Label htmlFor={id}>{label.toUpperCase()}</Label>
      <InputElement
        type={type}
        id={id}
        name={name}
        isInvalid={isInvalid}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {isInvalid && <InputError>{error}</InputError>}
    </>
  );
};
