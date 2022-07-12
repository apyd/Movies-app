export interface IPropsTextarea {
  id: string,
  name: string,
  value: string,
  touched: boolean,
  onBlur: any, //FIX IT
  onChange: any, //FIX IT
  placeholder: string,
  label: string
  error: any,
}
