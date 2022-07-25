export interface IPropsMultiSelect {
  options: {
    id: string;
    title: string;
  }[];
  setIsExpanded: any;
  isExpanded: boolean;
  value: string[];
  touched: boolean;
  onChange: any; //FIX IT
  onBlur: any; //FIX IT
  label: string;
  toggleSelect: any; //FIX IT
  error: any; //FIX IT
}
