import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import { Button } from '../UI/Button/Button';
import { ButtonVariant } from '../UI/Button/Button.consts';
import { IModalProps } from './Modal.types';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

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
              <div className={cx('overlay')}></div>
              <div className={cx('modal')}>
                <div className={cx('modal__header')}>
                  <h2>{title.toUpperCase()}</h2>
                  <Button variant={ButtonVariant.ghost} onClick={toggleModal}>
                    x
                  </Button>
                </div>
                {children}
              </div>
            </>
          )}
        </>,
        document.getElementById('modalRoot') as HTMLElement
      )
    : null;
};
