export interface IPropsMultiSelect {
  options: {
    id: string,
    title: string
  }[],
  setIsExpanded: any,
  isExpanded: boolean,
  value: string[],
  onChange: any, //FIX IT
  selected: string[],
  label: string,
  toggleOption: any, //FIX IT
  toggleSelect: any, //FIX IT
  error: any //FIX IT
}