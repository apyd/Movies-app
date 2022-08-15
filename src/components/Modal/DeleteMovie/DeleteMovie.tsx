import React, { FC } from 'react';
import { Button } from '../../UI/Button/Button';
import { ButtonShape, ButtonSize, ButtonVariant } from '../../UI/Button/Button.consts';
import { IDeleteMovieProps } from './DeleteMovie.types';
import { LoadingSpinner } from '../../UI/LoadingSpinner/LoadingSpinner';
import { Status } from '../Status/Status';
import { DeleteActions } from './DeleteMovie.styled';

export const DeleteMovie: FC<IDeleteMovieProps> = ({
  onSubmit,
  movieId,
  isError,
  isSuccess,
  isLoading
}) => {
  const isBeforeAction = !isLoading && !isSuccess && !isError;

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isSuccess && <Status status="SUCCESS" />}
      {isError && <Status status="ERROR" />}
      {isBeforeAction && (
        <>
          <p>Are you sure you want to delete this movie?</p>
          <DeleteActions>
            <Button
              variant={ButtonVariant.primary}
              size={ButtonSize.medium}
              shape={ButtonShape.rectangle}
              onClick={() => onSubmit(movieId)}
            >
              Confirm
            </Button>
          </DeleteActions>
        </>
      )}
    </>
  );
};
