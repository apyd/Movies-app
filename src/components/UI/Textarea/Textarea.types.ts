export interface IPropsTextarea {
  id: string;
  name: string;
  value: string;
  touched: boolean | undefined;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  label: string;
  error: string | undefined;
}
