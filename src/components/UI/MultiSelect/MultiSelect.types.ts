export interface IPropsMultiSelect {
  options: {
    id: string;
    title: string;
  }[];
  setIsExpanded: boolean;
  isExpanded: boolean;
  value: string[];
  touched: boolean;
  onChange: (field: string, value: string[], shouldValidate?: boolean) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  label: string;
  toggleSelect: () => void;
  error: string | string[];
}
