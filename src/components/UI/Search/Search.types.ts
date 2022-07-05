export interface ISearchProps {
    placeholder?: string,
    searchButtonText?: string
    setQuery: () => void;
    onSearch: () => void;
}