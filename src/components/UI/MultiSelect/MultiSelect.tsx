import React, { FC } from 'react';
import { InputError } from '../../../shared/error.styled';
import { SvgIcon } from '../Icon/SvgIcon';
import { iconTypes } from '../Icon/SvgIcon.consts';
import {
  MultiSelectLabel,
  MultiSelectOption,
  MultiSelectOptions,
  MultiSelectSelected,
  MultiSelectSummary,
  MultiSelectWrapper
} from './MultiSelect.styled';
import { IPropsMultiSelect } from './MultiSelect.types';

export const MultiSelect: FC<Partial<IPropsMultiSelect>> = ({
  options,
  isExpanded,
  value,
  touched,
  onChange,
  onBlur,
  toggleSelect,
  label,
  error
}) => {
  const isInvalid = !!error && touched;

  const onInputChange = (inputValue: string) => {
    let valuesCopy = [...value!];
    if (!valuesCopy.includes(inputValue)) {
      valuesCopy = [...valuesCopy, inputValue];
      onChange!('genres', valuesCopy, false);
    } else {
      valuesCopy.splice(value!.indexOf(inputValue), 1);
      onChange!('genres', valuesCopy, false);
    }
  };

  return (
    <MultiSelectWrapper>
      <MultiSelectLabel>{label}</MultiSelectLabel>
      <MultiSelectSelected
        id="multi-select"
        isInvalid={!!isInvalid}
        tabIndex={0}
        onClick={toggleSelect}
      >
        <MultiSelectSummary isInvalid={!!isInvalid}>{value?.length} selected</MultiSelectSummary>
        <SvgIcon icon={iconTypes.chevron} isSmall={true} />
      </MultiSelectSelected>
      {isExpanded && (
        <MultiSelectOptions>
          {options?.map(({ id, title }) => {
            return (
              <MultiSelectOption key={id} onClick={() => onInputChange(title)}>
                <input
                  name="name"
                  checked={value?.includes(title)}
                  type="checkbox"
                  value={value}
                  onBlur={onBlur}
                  onChange={() => onInputChange(title)}
                />
                <span>{title}</span>
              </MultiSelectOption>
            );
          })}
        </MultiSelectOptions>
      )}
      {isInvalid && <InputError>{error}</InputError>}
    </MultiSelectWrapper>
  );
};
