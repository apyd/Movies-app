export interface ISearchViewProps {
  value: string,
  toggleModal: () => void;
  onSearch: (e: React.FormEvent<HTMLElement>) => void;
  onChange: (value: string) => void;
}
