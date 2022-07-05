import React, { FC } from "react";
import { Button } from "../../../UI/Button/Button";
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
        <Button onClick={toggleModal}>Confirm</Button>
      </div>
    </Modal>
  );
};
