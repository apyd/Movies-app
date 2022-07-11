import { useState } from "react";
import { GENRES as options } from "../dictionary/dictionary";
import { IPropsMultiSelect } from "../components/UI/MultiSelect/MultiSelect.types";

export const useMultiSelect = (label: string): Partial<IPropsMultiSelect> => {
  const [selected, setSelected] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleSelect = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const toggleOption = (name: string) => {
    setSelected((prevSelected) => {
      const newArray = [...prevSelected];
      if (newArray.includes(name)) {
        return newArray.filter((item) => item != name);
      } else {
        newArray.push(name);
        return newArray;
      }
    });
  };

  return {
    options,
    selected,
    label,
    toggleOption,
    isExpanded,
    toggleSelect,
  };
};
