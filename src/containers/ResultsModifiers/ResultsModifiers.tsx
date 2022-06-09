import React from "react";
import { Filters } from "../../components/UI/Filter/Filters";
import { Select } from "../../components/UI/Select/Select";
import { FILTER_DATA, SORT_OPTIONS } from "./randomdata.js";
import "./ResultsModifiers.scss";

export const ResultsModifiers = () => {
  return (
    <div className="results-modifiers">
      <Filters data={FILTER_DATA} />
      <Select
        options={SORT_OPTIONS}
        onOptionChange={() => {}}
        selectLabel="Sort by"
      />
    </div>
  );
};
