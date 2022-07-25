import { ReactNode } from 'react';

export interface IModalProps {
  title: string;
  isOpened: boolean;
  toggleModal: () => void;
  children: ReactNode;
}
