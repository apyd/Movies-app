export interface ISearchProps {
  placeholder?: string;
  searchButtonText?: string;
  searchRef: any,
  onSearch: (e: React.FormEvent<HTMLElement>) => void;
}
