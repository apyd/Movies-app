export interface IFilterListProps {
  options: {
    name: string;
    label: string;
    value: string;
  }[];
  selected: string;
  onFilterSelect: (filter: string) => void;
}
