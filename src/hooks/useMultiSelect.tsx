import { useState } from 'react';
import { GENRES as options } from '../dictionary/dictionary';
import { IPropsMultiSelect } from '../components/UI/MultiSelect/MultiSelect.types';

export const useMultiSelect = (label: string): Partial<IPropsMultiSelect> => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleSelect = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return {
    options,
    label,
    isExpanded,
    toggleSelect
  };
};
