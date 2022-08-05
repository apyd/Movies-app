import React, { FC } from "react";
import classNames from "classnames/bind";
import { Button } from "../../UI/Button/Button";
import { DatePicker } from "../../UI/DatePicker/DatePicker";
import { MultiSelect } from "../../UI/MultiSelect/MultiSelect";
import { Textarea } from "../../UI/Textarea/Textarea";
import { Input } from "../../UI/Input/Input";
import { useMultiSelect } from "../../../hooks/useMultiSelect";
import { ButtonVariant } from "../../UI/Button/Button.consts";
import { IFormProps } from "./Form.types";
import styles from "./Form.module.scss";

const cx = classNames.bind(styles);

export const Form: FC<IFormProps> = ({
  isValid,
  values,
  errors,
  touched,
  handleSubmit,
  setFieldValue,
  handleChange,
  handleBlur,
  resetForm,
}) => {
  const { options, label, isExpanded, toggleSelect } =
    useMultiSelect("Genres*");

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
            touched={touched.title}
            onBlur={handleBlur}
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
            touched={touched["poster_path"]}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.poster_path}
          />
          <MultiSelect
            options={options}
            label={label}
            value={values.genres}
            onBlur={handleBlur}
            touched={touched.genres}
            onChange={setFieldValue}
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
            label="Release date"
            value={values["release_date"]}
            touched={touched["release_date"]}
            onBlur={handleBlur}
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
            touched={touched["vote_average"]}
            onBlur={handleBlur}
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
            touched={touched.runtime}
            onBlur={handleBlur}
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
        touched={touched.overview}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.overview}
      />
      <div className={cx("form__actions")}>
        <Button
          type="reset"
          variant={ButtonVariant.secondary}
          onClick={resetForm}
        >
          Reset
        </Button>
        <Button type="submit" isDisabled={!isValid}>
          Submit
        </Button>
      </div>
    </form>
  );
};
