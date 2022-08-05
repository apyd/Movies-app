import React, { FC } from "react";
import classNames from "classnames/bind";
import { Button } from "../../UI/Button/Button";
import { ButtonVariant } from "../../UI/Button/Button.consts";
import { IDeleteMovieProps } from "./DeleteMovie.types";
import { LoadingSpinner } from "../../UI/LoadingSpinner/LoadingSpinner";
import { Status } from "../Status/Status";
import styles from "./DeleteMovie.module.scss";

const cx = classNames.bind(styles);

export const DeleteMovie: FC<IDeleteMovieProps> = ({
  onSubmit,
  movieId,
  isError,
  isSuccess,
  isLoading,
}) => {
  const isBeforeAction = !isLoading && !isSuccess && !isError;

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isSuccess && <Status status="SUCCESS" />}
      {isError && <Status status="ERROR" />}
      {isBeforeAction && (
        <>
          <p className={cx("delete-text")}>
            Are you sure you want to delete this movie?
          </p>
          <div className={cx("delete-actions")}>
            <Button
              variant={ButtonVariant.primary}
              onClick={() => onSubmit(movieId)}
            >
              Confirm
            </Button>
          </div>
        </>
      )}
    </>
  );
};
