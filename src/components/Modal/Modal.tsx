import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../UI/Button/Button';
import { ButtonShape, ButtonSize, ButtonVariant } from '../UI/Button/Button.consts';
import { ModalHeader, ModalWrapper, Overlay } from './Modal.styled';
import { IModalProps } from './Modal.types';

export const Modal: FC<IModalProps> = ({ title, isOpened, toggleModal, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <>
          {isOpened && (
            <>
              <Overlay></Overlay>
              <ModalWrapper id="modal">
                <ModalHeader>
                  <h2>{title.toUpperCase()}</h2>
                  <Button
                    id="closeModal"
                    size={ButtonSize.medium}
                    shape={ButtonShape.rectangle}
                    variant={ButtonVariant.ghost}
                    onClick={toggleModal}
                  >
                    x
                  </Button>
                </ModalHeader>
                {children}
              </ModalWrapper>
            </>
          )}
        </>,
        document.getElementById('modalRoot') as HTMLElement
      )
    : null;
};
