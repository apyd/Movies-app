import { Dispatch, SetStateAction } from 'react';

export interface IFilterProps {
  name: string;
  label: string;
  value: string;
  onFilterSelect: any; //TODO
}
