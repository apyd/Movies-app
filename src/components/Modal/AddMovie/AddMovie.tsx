import React, { FC } from 'react';
import { useFormik } from 'formik';
import { FormSchema } from '../Form/configuration';
import { LoadingSpinner } from '../../UI/LoadingSpinner/LoadingSpinner';
import { Form } from '../Form/Form';
import { Status } from '../Status/Status';
import { IAddMovieProps, AddMovieFormData } from './AddMovie.types';

export const AddMovie: FC<IAddMovieProps> = ({ onFormSubmit, isError, isLoading, isSuccess }) => {
  const isBeforeAction = !isLoading && !isSuccess && !isError;

  const initialValues: AddMovieFormData = {
    title: '',
    poster_path: '',
    genres: [],
    release_date: '',
    vote_average: 0,
    runtime: 0,
    overview: ''
  };

  const {
    isValid,
    values,
    errors,
    touched,
    handleSubmit,
    setFieldValue,
    handleChange,
    handleBlur,
    resetForm
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      onFormSubmit(values);
    },
    validationSchema: FormSchema
  });

  const formProps = {
    isValid,
    values,
    errors,
    touched,
    handleSubmit,
    setFieldValue,
    handleChange,
    handleBlur,
    resetForm
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isSuccess && <Status status="SUCCESS" />}
      {isError && <Status status="ERROR" />}
      {isBeforeAction && <Form {...formProps} />}
    </>
  );
};
