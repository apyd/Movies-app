export interface IPropsMultiSelect {
  options: {
    id: string;
    title: string;
  }[];
  isExpanded: boolean;
  value: string[];
  touched: boolean | undefined;
  onChange: (field: string, value: string[], shouldValidate?: boolean) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  label: string;
  toggleSelect: () => void;
  error: string | string[];
}
