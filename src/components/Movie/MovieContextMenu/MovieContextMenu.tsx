import React, { FC, useState } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../../UI/Button/Button';
import { IMovieContextMenuProps } from './MovieContextMenu.types';
import MenuIcon from '../../../assets/threedots.svg';
import styles from './MovieContextMenu.scss';
import useMovie from '../../../context/MovieContext/MovieContext';
import { ButtonType } from '../../UI/Button/Button.consts';
import { SvgIcon } from '../../UI/Icon/SvgIcon';

export const MovieContextMenu: FC<IMovieContextMenuProps> = ({
  movieId,
  toggleEditModal,
  toggleDeleteModal
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { openedMovieMenuId, setOpenedMovieMenuId } = useMovie();
  const onMenuButtonClick = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
      setOpenedMovieMenuId(null);
    } else {
      setIsCollapsed(false);
      setOpenedMovieMenuId(movieId);
    }
  };
  const cx = classNames.bind(styles);

  return (
    <>
      <div className={cx('context-menu')}>
        <Button variant="secondary" shape="round" onClick={onMenuButtonClick}>
          <SvgIcon icon={MenuIcon} isSmall />
        </Button>
        {openedMovieMenuId === movieId && (
          <div className={cx('context-menu__options')}>
            <Button variant={ButtonType.secondary} onClick={toggleEditModal}>
              Edit
            </Button>
            <Button variant={ButtonType.secondary} onClick={toggleDeleteModal}>
              Delete
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
