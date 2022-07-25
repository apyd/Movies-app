// import { Dispatch } from "@reduxjs/toolkit"
import { Dispatch, SetStateAction } from 'react';
import { IFilterProps } from '../Filter.types';

export interface IFilterListProps {
  options: {
    name: string;
    label: string;
    value: string;
  }[];
  onFilterSelect: Dispatch<SetStateAction<string>>;
}
