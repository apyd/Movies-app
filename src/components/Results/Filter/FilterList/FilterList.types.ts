import { Dispatch, SetStateAction } from 'react';

export interface IFilterListProps {
  options: {
    name: string;
    label: string;
    value: string;
  }[];
  onFilterSelect: (selectedFilter: string) => void;
}
