import React, { FC } from "react";
import { Button } from "../../UI/Button/Button";
import { DatePicker } from "../../UI/DatePicker/DatePicker";
import { MultiSelect } from "../../UI/MultiSelect/MultiSelect";
import { Textarea } from "../../UI/Textarea/Textarea";
import { TextInput } from "../../UI/TextInput/TextInput";
import { useMultiSelect } from "../../../hooks/useMultiSelect";
import { IMovieFormProps } from "./MovieForm.types";
import { ButtonType } from "../../UI/Button/Button.consts";
import "./MovieForm.scss";

export const MovieForm: FC<IMovieFormProps> = () => {
  const { selected, toggleOption, options, label } = useMultiSelect("Genres");

  return (
    <form className="form">
      <div className="inputs--wrapper">
        <div className="form__column">
          <TextInput
            id="title"
            name="title"
            placeholder="title"
            label="title"
          />
          <TextInput
            id="movie-url"
            name="movieUrl"
            placeholder="movie url"
            label="movie url"
          />
          <MultiSelect
            selected={selected}
            toggleOption={toggleOption}
            options={options}
            label={label}
          />
        </div>
        <div className="form__column form__column--half-size">
          <DatePicker
            id="date-picker"
            name="date-picker"
            placeholder="date picker"
            label="date picker"
          />
          <TextInput
            id="rating"
            name="rating"
            placeholder="rating"
            label="rating"
          />
          <TextInput
            id="runtime"
            name="runtime"
            placeholder="runtime"
            label="runtime"
          />
        </div>
      </div>
      <Textarea
        id="overview"
        name="overview"
        placeholder="overview"
        label="overview"
      />
      <div className="form__actions">
        <Button variant={ButtonType.secondary} onClick={() => {}}>
          Reset
        </Button>
        <Button onClick={() => {}}>Submit</Button>
      </div>
    </form>
  );
};
