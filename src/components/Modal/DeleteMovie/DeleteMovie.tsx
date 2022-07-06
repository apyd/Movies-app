import React, { FC } from "react";
import classNames from "classnames/bind";
import { Button } from "../../UI/Button/Button";
import { ButtonVariant, ButtonType } from "../../UI/Button/Button.consts";
import { IDeleteMovieProps } from "./DeleteMovie.types";
import styles from "./DeleteMovie.scss";

export const DeleteMovie: FC<IDeleteMovieProps> = ({
  onSubmit,
  toggleModal,
  movieId,
}) => {
  const cx = classNames.bind(styles);

  return (
    <>
      <p className={cx("delete-text")}>
        Are you sure you want to delete this movie?
      </p>
      <div className={cx("delete-actions")}>
        <Button variant={ButtonVariant.outline} onClick={toggleModal}>
          Cancel
        </Button>
        <Button
          variant={ButtonVariant.primary}
          onClick={() => onSubmit(movieId)}
        >
          Confirm
        </Button>
      </div>
    </>
  );
};
