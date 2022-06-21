import React, { FC } from "react";
import { Button } from "../../../UI/Button/Button";
import { ButtonType } from "../../../UI/Button/Button.consts";
import { Modal } from "../../Modal";
import "./DeleteMovie.scss";
import { IDeleteMovieProps } from "./DeleteMovie.types";

export const DeleteMovie: FC<IDeleteMovieProps> = ({
  isOpened,
  toggleModal,
}) => {
  return (
    <Modal title="Delete movie" toggleModal={toggleModal} isOpened={isOpened}>
      <p className="delete-text">Are you sure you want to delete this movie?</p>
      <div className="delete-actions">
        <Button variant={ButtonType.outline} onClick={toggleModal}>
          Cancel
        </Button>
        <Button variant={ButtonType.primary} onClick={toggleModal}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};
