import React, { FC } from "react";
import { Modal } from "../../Modal";
import { MovieForm } from "../MovieForm";
import { IEditMovieProps } from "./EditMovie.types";

export const EditMovie: FC<IEditMovieProps> = (props) => {
  return (
    <Modal title="Edit movie" toggleModal={() => {}} isOpened="false">
      <MovieForm />
    </Modal>
  );
};
