export interface IPropsMultiSelect {
  options: {
    id: string;
    title: string;
  }[];
  selected: Array<string>;
  toggleOption: any;
  label: string;
}
