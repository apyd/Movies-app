import React, { useState } from "react";
import classNames from "classnames/bind";
// import { useSearchParams } from "react-router-dom";
import { FILTER_OPTIONS, SORT_OPTIONS } from "../../dictionary/dictionary";
import { FilterList } from "../UI/Filter/FilterList/FilterList";
import { Sort } from "../UI/Sort/Sort";
import styles from "./Options.module.scss";

const cx = classNames.bind(styles);
const sortOrder = "asc";

export const Options = () => {
  // const [params, setQueryParams] = useSearchParams();
  // const initSort = params.get("sortBy");
  // const initFilter = params.get("genre");

  const [filter, setFilter] = useState();
  // initFilter ?? `${FILTER_OPTIONS[0].value}`
  // const [sort, setSort] = useState(initSort ?? `${SORT_OPTIONS[0].value}`);

  const onFilterChange = (selectedFilter: string) => {
    // setFilter(selectedFilter);
    // setQueryParams({ ...Object.fromEntries(params), genre: selectedFilter });
  };

  const onSortChange = (selectedSort: string) => {
    // setSort(selectedSort);
    // setQueryParams({ ...Object.fromEntries(params), sort: selectedSort });
  };

  return (
    <div className={cx("options")}>
      <div className={cx("options-wrapper")}>
        <FilterList
          selected=""
          options={FILTER_OPTIONS}
          onFilterSelect={onFilterChange}
        />
        <Sort
          selected=""
          options={SORT_OPTIONS}
          onOptionChange={onSortChange}
          sortLabel="Sort by"
        />
      </div>
    </div>
  );
};
