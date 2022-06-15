import React, { FC } from "react";
import { Button } from "../../UI/Button/Button";
import { DatePicker } from "../../UI/DatePicker/DatePicker";
import { MultiSelect } from "../../UI/MultiSelect/MultiSelect";
import { Textarea } from "../../UI/Textarea/Textarea";
import { TextInput } from "../../UI/TextInput/TextInput";
import { IMovieFormProps } from "./MovieForm.types";
import "./MovieForm.scss";
import { ButtonType } from "../../UI/Button/Button.consts";

export const MovieForm: FC<IMovieFormProps> = () => {
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
          <TextInput
            id="genre"
            name="genre"
            placeholder="genre"
            label="genre"
          />
          {/* <MultiSelect
            id="genre"
            name="genre"
            placeholder="genre"
            label="genre"
          /> */}
        </div>
        <div className="form__column form__column--half-size">
          {/* <DatePicker
            id="date-picker"
            name="date-picker"
            placeholder="date picker"
            label="date picker"
          /> */}
          <TextInput
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
