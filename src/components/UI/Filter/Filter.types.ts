import { MouseEventHandler } from "react";

export interface IFilterProps {
  name: string;
  label: string;
  value: string;
  selected: string;
  onFilterSelect: MouseEventHandler<HTMLLabelElement>
}
