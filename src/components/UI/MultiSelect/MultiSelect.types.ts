export interface IPropsMultiSelect {
  options: {
    id: string,
    title: string
  }[],
  value: string[],
  onChange: any, //FIX IT
  selected: string[],
  toggleOption: any //FIX IT
  label: string
}