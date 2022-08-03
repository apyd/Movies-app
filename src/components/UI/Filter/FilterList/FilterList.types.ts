import { Dispatch, SetStateAction } from "react"

export interface IFilterListProps {
  options: {
    name: string,
    label: string,
    value: string
  }[],
  selected: string,
  onFilterSelect: (filter: string) => void;
}
