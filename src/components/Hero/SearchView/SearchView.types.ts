export interface ISearchViewProps {
  toggleModal: any;
  value: string;
  onChange: (value: React.SetStateAction<string>) => void;
  onSearch: (e: React.FormEvent<HTMLElement>) => void;
}
