import React, { useState } from 'react';
import { Modal as RawModal } from '../components/Modal/Modal';

export const useModal = (title: string, Element: any) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleModal = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  const Modal = (props: any) => {
    return (
      <RawModal title={title} isOpened={isOpened} toggleModal={toggleModal}>
        <Element toggleModal={toggleModal} {...props} />
      </RawModal>
    );
  };

  return [Modal, toggleModal];
};
