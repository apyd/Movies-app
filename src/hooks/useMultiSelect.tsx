import { useState } from "react";
import { GENRES as options } from "../api/resultsData";
import { IPropsMultiSelect } from "../components/UI/MultiSelect/MultiSelect.types";

export const useMultiSelect = (label: string): IPropsMultiSelect => {
  const [selected, setSelected] = useState<Array<string>>([]);

  const toggleOption = (id: number) => {
    setSelected((prevSelected) => {
      const newArray = [...prevSelected];
      if (newArray.includes(id)) {
        return newArray.filter((item) => item != id);
      } else {
        newArray.push(id);
        return newArray;
      }
    });
  };

  return { selected, toggleOption, options, label };
};
