import React, { FC } from 'react';
import classNames from 'classnames/bind';
import * as Yup from 'yup';
import { FormikConfig, FormikValues, useFormik } from 'formik';
import { MovieFormData } from './MovieForm.types';

import { Modal } from '../Modal';
import { Button } from '../../UI/Button/Button';
import { DatePicker } from '../../UI/DatePicker/DatePicker';
import { MultiSelect } from '../../UI/MultiSelect/MultiSelect';
import { Textarea } from '../../UI/Textarea/Textarea';
import { TextInput } from '../../UI/TextInput/TextInput';
import { useMultiSelect } from '../../../hooks/useMultiSelect';
import { IMovieFormProps } from './MovieForm.types';
import { ButtonType } from '../../UI/Button/Button.consts';
import styles from './MovieForm.scss';

export const MovieForm: FC<IMovieFormProps> = ({ onSubmit, formData }) => {
  const cx = classNames.bind(styles);
  const { selected, toggleOption, options, label } = useMultiSelect('Genres');
  // const initialValues: MovieFormData = {
  //   id: formData?.id || 0, // TODO
  //   title: formData?.title || "",
  //   posterPath: formData?.posterPath || "",
  //   genres: formData?.genres || [],
  //   release_date: formData?.release_date || String(new Date()),
  //   vote_average: formData?.vote_average || 0,
  //   runtime: formData?.runtime || 0,
  //   overview: formData?.overview || "",
  // };

  // const formik = useFormik<FormikConfig<FormikValues>>({
  //   initialValues: initialValues,
  //   onSubmit: onSubmit,
  // });

  return (
    <form className={cx('form')}>
      <div className={cx('inputs--wrapper')}>
        <div className={cx('form__column')}>
          <TextInput id="title" name="title" placeholder="title" label="title" />
          <TextInput id="movie-url" name="movieUrl" placeholder="movie url" label="movie url" />
          <MultiSelect
            selected={selected}
            toggleOption={toggleOption}
            options={options}
            label={label}
          />
        </div>
        <div className={cx('form__column', 'form__column--half-size')}>
          <DatePicker
            id="date-picker"
            name="date-picker"
            placeholder="date picker"
            label="date picker"
          />
          <TextInput
            id="vote_average"
            name="vote_average"
            placeholder="vote_average"
            label="vote_average"
          />
          <TextInput id="runtime" name="runtime" placeholder="runtime" label="runtime" />
        </div>
      </div>
      <Textarea id="overview" name="overview" placeholder="overview" label="overview" />
      <div className={cx('form__actions')}>
        <Button variant={ButtonType.secondary} onClick={() => {}}>
          Reset
        </Button>
        {/*eslint:disable-next-line:no-empty*/}
        <Button onClick={() => {}}>Submit</Button>
      </div>
    </form>
  );
};
