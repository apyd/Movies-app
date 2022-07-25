export interface IPropsDatePicker {
  id: string;
  name: string;
  value: string | number | readonly string[];
  touched: boolean;
  onBlur: any; //FIX IT
  onChange: any; //FIX IT
  placeholder: string;
  label: string;
  error: any; //FIX IT
}
