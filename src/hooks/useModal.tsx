import React, { useCallback, useState } from 'react';
import { Modal as RawModal } from '../components/Modal/Modal';
import { IModalProps } from '../components/Modal/Modal.types';

export const useModal = (
  title: string,
  Element: React.ElementType,
  reset: () => void
): [(props: any) => JSX.Element, () => void] => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleModal = useCallback(() => {
    setIsOpened((isOpened) => !isOpened);
    reset();
  }, [reset]);

  const Modal = (props: IModalProps) => {
    return (
      <RawModal title={title} isOpened={isOpened} toggleModal={toggleModal}>
        <Element toggleModal={toggleModal} {...props} />
      </RawModal>
    );
  };

  return [Modal, toggleModal];
};
