import React, { useCallback, useState } from 'react';
import { Modal as RawModal } from '../components/Modal/Modal';

export const useModal = (title: string, Element: any, reset: any) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleModal = useCallback(() => {
    setIsOpened((isOpened) => !isOpened);
    reset();
  }, [reset]);

  const Modal = (props: any) => {
    return (
      <RawModal title={title} isOpened={isOpened} toggleModal={toggleModal}>
        <Element toggleModal={toggleModal} {...props} />
      </RawModal>
    );
  };

  return [Modal, toggleModal];
};
