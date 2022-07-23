// import { Dispatch } from "@reduxjs/toolkit"
import { Dispatch, SetStateAction } from 'react';

export interface IFilterListProps {
  options: {
    name: string;
    label: string;
    value: string;
  }[];
  onFilterSelect: Dispatch<SetStateAction<string>>;
}
