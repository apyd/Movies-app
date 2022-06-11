import React, { FC } from "react";
import { Button } from "../UI/Button/Button";
import { ISearchProps } from "./Search.types";
import "./Search.scss";

export const Search: FC<ISearchProps> = ({ placeholder, searchButtonText, setQuery, onSearch }) => {
  return (
    <form className="search" onSubmit={onSearch}>
      <label htmlFor="search"></label>
      <input
        type="search"
        id="search"
        name="search"
        placeholder={placeholder}
        onChange={setQuery}
      />
      <Button onClick={() => {}}>{searchButtonText}</Button>
    </form>
  );
};

Search.defaultProps = {
  placeholder: "What do you want to watch?",
  searchButtonText: 'Search',
  setQuery: () => { },
  onSearch: () => { }
};
