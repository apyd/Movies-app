import React, { FC } from "react";
import classNames from "classnames/bind";
import { useFormik } from "formik";
import { FormSchema } from "./configuration";
import { MovieFormData } from "./MovieForm.types";
import { Button } from "../../UI/Button/Button";
import { DatePicker } from "../../UI/DatePicker/DatePicker";
import { MultiSelect } from "../../UI/MultiSelect/MultiSelect";
import { Textarea } from "../../UI/Textarea/Textarea";
import { Input } from "../../UI/Input/Input";
import { useMultiSelect } from "../../../hooks/useMultiSelect";
import { IMovieFormProps } from "./MovieForm.types";
import { ButtonType, ButtonVariant } from "../../UI/Button/Button.consts";
import styles from "./MovieForm.scss";

export const MovieForm: FC<IMovieFormProps> = ({ onFormSubmit, formData }) => {
  const cx = classNames.bind(styles);

  const { selected, toggleOption, options, label, isExpanded, toggleSelect } =
    useMultiSelect("Genres*");

  const initialValues: Partial<MovieFormData> = {
    title: formData?.title || "",
    poster_path: formData?.poster_path || "",
    genres: formData?.genres || [],
    release_date: formData?.release_date || "",
    vote_average: formData?.vote_average || 0,
    runtime: formData?.runtime || 0,
    overview: formData?.overview || "",
  };

  const { isValid, values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      const data = JSON.stringify(values, null, 2);
      onFormSubmit(data);
    },
    validationSchema: FormSchema,
  });

  return (
    <form className={cx("form")} onSubmit={handleSubmit}>
      <div className={cx("inputs--wrapper")}>
        <div className={cx("form__column")}>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="title"
            label="Movie title*"
            value={values.title}
            onChange={handleChange}
            error={errors.title}
          />
          <Input
            type="text"
            id="poster_path"
            name="poster_path"
            placeholder="poster path url"
            label="Poster path (URL)*"
            value={values["poster_path"]}
            onChange={handleChange}
            error={errors.poster_path}
          />
          <MultiSelect
            selected={selected}
            toggleOption={toggleOption}
            options={options}
            label={label}
            value={values.genres}
            onChange={handleChange}
            toggleSelect={toggleSelect}
            isExpanded={isExpanded}
            error={errors.genres}
          />
        </div>
        <div className={cx("form__column", "form__column--half-size")}>
          <DatePicker
            id="release_date"
            name="release_date"
            placeholder="date picker"
            label="Release date*"
            value={values["release_date"]}
            onChange={handleChange}
            error={errors.release_date}
          />
          <Input
            id="vote_average"
            type="number"
            name="vote_average"
            placeholder="vote_average"
            label="Average votes"
            value={values["vote_average"]}
            onChange={handleChange}
            error={errors.vote_average}
          />
          <Input
            id="runtime"
            type="number"
            name="runtime"
            placeholder="runtime"
            label="Runtime*"
            value={values.runtime}
            onChange={handleChange}
            error={errors.runtime}
          />
        </div>
      </div>
      <Textarea
        id="overview"
        name="overview"
        placeholder="overview"
        label="Overview*"
        value={values.overview}
        onChange={handleChange}
        error={errors.overview}
      />
      <div className={cx("form__actions")}>
        <Button
          type={ButtonType.reset}
          variant={ButtonVariant.secondary}
          onClick={() => {}}
        >
          Reset
        </Button>
        <Button
          type={ButtonType.submit}
          onClick={() => {}}
          isDisabled={!isValid}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
