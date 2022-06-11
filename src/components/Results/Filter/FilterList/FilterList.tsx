import React, { FC } from "react";
import { IFilterListProps } from "./FilterList.types";
import "./FilterList.scss";
import Filter from "../Filter";

export const FilterList: FC<IFilterListProps> = props => {
  const filtersData = Object.values(props);
  return (
    <form className="filters">
      {filtersData.map((filterData) => {
        return (
          <Filter key={filterData.id} {...filterData}/>
        );
      })}
    </form>
  );
};
