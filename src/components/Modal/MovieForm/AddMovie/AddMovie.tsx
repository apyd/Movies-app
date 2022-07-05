import React, { FC } from "react";
import { Modal } from "../../Modal";
import { MovieForm } from "../MovieForm";
import { IAddMovieProps } from "./AddMovie.types";

export const AddMovie: FC<IAddMovieProps> = ({ isOpened, toggleModal }) => {
  return (
    <Modal title="Add movie" isOpened={isOpened} toggleModal={toggleModal}>
      <MovieForm />
    </Modal>
  );
};
