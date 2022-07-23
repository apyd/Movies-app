export interface ISearchProps {
  placeholder?: string,
  searchButtonText?: string,
  value: string,
  onChange: (value: React.SetStateAction<string>) => void
  onSearch: (e: React.FormEvent<HTMLElement>) => void
}