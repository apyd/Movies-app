import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import { Button } from '../UI/Button/Button';
import { IModalProps } from './Modal.types';
import styles from './Modal.scss';
import { ButtonType } from '../UI/Button/Button.consts';

export const Modal: FC<IModalProps> = ({ title, isOpened, toggleModal, children }) => {
  const portalDiv = document.getElementById('modalRoot') as HTMLElement;
  const cx = classNames.bind(styles);

  return createPortal(
    <>
      {isOpened && (
        <>
          <div className={cx('overlay')}></div>
          <div className={cx('modal')}>
            <div className={cx('modal__header')}>
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
