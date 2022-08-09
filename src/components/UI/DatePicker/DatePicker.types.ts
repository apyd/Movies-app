export interface IPropsDatePicker {
  id: string;
  name: string;
  value: string | number | readonly string[];
  touched: boolean | undefined;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  error: string | undefined;
}
