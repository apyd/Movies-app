import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../UI/Button/Button';
import { IModalProps } from './Modal.types';
import './Modal.scss';
import { ButtonType } from '../UI/Button/Button.consts';

export const Modal: FC<IModalProps> = ({ title, isOpened, toggleModal, children }) => {
  const portalDiv = document.getElementById('modal') as HTMLElement;

  return createPortal(
    <>
      {isOpened && (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <div className="modal__header">
              <h2>{title.toUpperCase()}</h2>
              <Button variant={ButtonType.ghost} onClick={toggleModal}>
                x
              </Button>
            </div>
            {children}
          </div>
        </>
      )}
    </>,
    portalDiv
  );
};
