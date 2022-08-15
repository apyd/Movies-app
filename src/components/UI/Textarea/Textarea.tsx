import React, { FC } from 'react';
import { InputError } from '../../../shared/error.styled';
import { TextareaElement, TextareaLabel } from './Textarea.styled';
import { IPropsTextarea } from './Textarea.types';

export const Textarea: FC<IPropsTextarea> = ({
  id,
  name,
  value,
  touched,
  onBlur,
  onChange,
  placeholder,
  label,
  error
}) => {
  const isInvalid = !!error && touched;

  return (
    <>
      <TextareaLabel htmlFor={id}>{label.toUpperCase()}</TextareaLabel>
      <TextareaElement
        id={id}
        name={name}
        isInvalid={!!isInvalid}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        rows={2}
      />
      {isInvalid && <InputError>{error}</InputError>}
    </>
  );
};
