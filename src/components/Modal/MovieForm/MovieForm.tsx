import React, { FC } from 'react';
import classNames from 'classnames/bind';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { MovieFormData } from './MovieForm.types';
import { Button } from '../../UI/Button/Button';
import { DatePicker } from '../../UI/DatePicker/DatePicker';
import { MultiSelect } from '../../UI/MultiSelect/MultiSelect';
import { Textarea } from '../../UI/Textarea/Textarea';
import { TextInput } from '../../UI/TextInput/TextInput';
import { useMultiSelect } from '../../../hooks/useMultiSelect';
import { IMovieFormProps } from './MovieForm.types';
import { ButtonType, ButtonVariant } from '../../UI/Button/Button.consts';
import styles from './MovieForm.scss';

export const MovieForm: FC<IMovieFormProps> = ({ onFormSubmit, formData }) => {
  const cx = classNames.bind(styles);
  const { selected, toggleOption, options, label } = useMultiSelect('Genres');
  const initialValues: MovieFormData = {
    id: formData?.id || 0,
    title: formData?.title || '',
    poster_path: formData?.poster_path || '',
    genres: formData?.genres || [],
    release_date: formData?.release_date || String(new Date()),
    vote_average: formData?.vote_average || 0,
    runtime: formData?.runtime || 0,
    overview: formData?.overview || ''
  };

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    onSubmit: onFormSubmit
  });

  return (
    <form className={cx('form')} onSubmit={handleSubmit}>
      <div className={cx('inputs--wrapper')}>
        <div className={cx('form__column')}>
          <TextInput
            id="title"
            name="title"
            placeholder="title"
            label="title"
            value={values.title}
            onChange={handleChange}
          />
          <TextInput
            id="poster_path"
            name="poster_path"
            placeholder="poster path url"
            label="poster path"
            value={values['poster_path']}
            onChange={handleChange}
          />
          <MultiSelect
            selected={selected}
            toggleOption={toggleOption}
            options={options}
            label={label}
            value={values.genres}
            onChange={handleChange}
          />
        </div>
        <div className={cx('form__column', 'form__column--half-size')}>
          <DatePicker
            id="release_date"
            name="release_date"
            placeholder="date picker"
            label="date picker"
            value={values['release_date']}
            onChange={handleChange}
          />
          <TextInput
            id="vote_average"
            name="vote_average"
            placeholder="vote_average"
            label="vote_average"
            value={values['vote_average']}
            onChange={handleChange}
          />
          <TextInput
            id="runtime"
            name="runtime"
            placeholder="runtime"
            label="runtime"
            value={values.runtime}
            onChange={handleChange}
          />
        </div>
      </div>
      <Textarea
        id="overview"
        name="overview"
        placeholder="overview"
        label="overview"
        value={values.overview}
        onChange={handleChange}
      />
      <div className={cx('form__actions')}>
        <Button type={ButtonType.reset} variant={ButtonVariant.secondary} onClick={() => {}}>
          Reset
        </Button>
        <Button type={ButtonType.submit} onClick={() => {}}>
          Submit
        </Button>
      </div>
    </form>
  );
};
