import React, { FC } from 'react';
import { useFormik } from 'formik';
import { FormSchema } from '../Form/configuration';
import { LoadingSpinner } from '../../UI/LoadingSpinner/LoadingSpinner';
import { Form } from '../Form/Form';
import { Status } from '../Status/Status';
import { IEditMovieProps } from './EditMovie.types';
import { EditMovieFormData } from './EditMovieFormData';

export const EditMovie: FC<IEditMovieProps> = ({
  onFormSubmit,
  formData,
  isError,
  isLoading,
  isSuccess
}) => {
  const isBeforeAction = !isLoading && !isSuccess && !isError;

  const initialValues: EditMovieFormData = {
    id: formData.id,
    title: formData.title || '',
    poster_path: formData.poster_path || '',
    genres: formData.genres || [],
    release_date: formData.release_date || '',
    vote_average: formData.vote_average || 0,
    runtime: formData.runtime || 0,
    overview: formData.overview || ''
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
