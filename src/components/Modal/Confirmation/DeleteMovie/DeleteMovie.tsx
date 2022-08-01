import React, { FC } from 'react';
import { Button } from '../../../UI/Button/Button';
import { ButtonVariant } from '../../../UI/Button/Button.consts';
import { Modal } from '../../Modal';
import './DeleteMovie.scss';
import { IDeleteMovieProps } from './DeleteMovie.types';

export const DeleteMovie: FC<IDeleteMovieProps> = ({ isOpened, toggleModal }) => {
  return (
    <Modal title="Delete movie" toggleModal={toggleModal} isOpened={isOpened}>
      <p className="delete-text">Are you sure you want to delete this movie?</p>
      <div className="delete-actions">
        <Button variant={ButtonVariant.outline} onClick={toggleModal}>
          Cancel
        </Button>
        <Button variant={ButtonVariant.primary} onClick={toggleModal}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};
