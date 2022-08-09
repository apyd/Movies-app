export interface ISearchProps {
  value: string,
  placeholder?: string;
  searchButtonText?: string;
  onSearch: (e: React.FormEvent<HTMLElement>) => void;
  onChange: (value: string) => void;
}
