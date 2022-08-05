import React, { FC } from "react";
import classNames from "classnames/bind";
import { Button } from "../Button/Button";
import { ISearchProps } from "./Search.types";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

export const Search: FC<ISearchProps> = ({
  value,
  placeholder = "What do you want to watch?",
  searchButtonText = "Search",
  onChange,
  onSearch,
}) => {
  return (
    <form
      id="searchForm"
      className={cx("search")}
      onSubmit={(e) => onSearch(e)}
    >
      <label htmlFor="search"></label>
      <input
        type="search"
        id="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name="search"
        placeholder={placeholder}
      />
      <Button type="submit">{searchButtonText}</Button>
    </form>
  );
};
