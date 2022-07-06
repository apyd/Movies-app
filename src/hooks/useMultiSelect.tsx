import { useState } from "react";
import { GENRES as options } from "../dictionary/dictionary";
import { IPropsMultiSelect } from "../components/UI/MultiSelect/MultiSelect.types";

export const useMultiSelect = (label: string): Partial<IPropsMultiSelect> => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (id: string) => {
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
