import React, { FC } from "react";
import { ISearchBarProps } from "./SearchBar.types";
import "./SearchBar.scss";

export const SearchBar: FC<ISearchBarProps> = ({ placeholder, setQuery }) => {
  return (
    <div className="searchBar">
      <label htmlFor="search"></label>
      <input
        type="search"
        id="search"
        name="search"
        placeholder={placeholder}
        onChange={setQuery}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  placeholder: "What do you want to watch?",
  setQuery: () => {},
};
