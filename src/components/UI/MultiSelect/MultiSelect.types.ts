export interface IPropsMultiSelect {
  options: {
    id: number,
    title: string
  }[],
  selected: Array<string>
  toggleOption: any //FIX IT
  label: string
}