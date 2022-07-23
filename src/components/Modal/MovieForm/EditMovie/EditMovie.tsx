import React, { FC } from 'react';
import { Modal } from '../../Modal';
import { MovieForm } from '../MovieForm';
import { IEditMovieProps } from './EditMovie.types';

export const EditMovie: FC<IEditMovieProps> = ({ isOpened, toggleModal }) => {
  return (
    <Modal title="Edit movie" toggleModal={toggleModal} isOpened={isOpened}>
      <MovieForm />
    </Modal>
  );
};
