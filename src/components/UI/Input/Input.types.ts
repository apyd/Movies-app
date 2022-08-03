
export interface IPropsInput {
  id: string;
  name: string;
  type: string;
  value: string | number;
  touched: boolean;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  error: string;
}
