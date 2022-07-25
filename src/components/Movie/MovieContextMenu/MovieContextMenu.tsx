import React, { FC, useCallback, useState } from 'react';
import classNames from 'classnames/bind';
import useMovie from '../../../context/MovieContext/MovieContext';
import { Button } from '../../UI/Button/Button';
import { SvgIcon } from '../../UI/Icon/SvgIcon';
import MenuIcon from '../../../assets/threedots.svg';
import { ButtonVariant } from '../../UI/Button/Button.consts';
import { IMovieContextMenuProps } from './MovieContextMenu.types';
import styles from './MovieContextMenu.scss';

const cx = classNames.bind(styles);

export const MovieContextMenu: FC<IMovieContextMenuProps> = ({
  movieId,
  toggleEditModal,
  toggleDeleteModal,
  onContextMenuClick
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

  return (
    <>
      <div className={cx('context-menu')} onClick={onContextMenuClick}>
        <Button variant="secondary" shape="round" onClick={onMenuButtonClick}>
          <SvgIcon icon={MenuIcon} isSmall />
        </Button>
        {openedMovieMenuId === movieId && (
          <div className={cx('context-menu__options')}>
            <Button variant={ButtonVariant.secondary} onClick={toggleEditModal}>
              Edit
            </Button>
            <Button variant={ButtonVariant.secondary} onClick={toggleDeleteModal}>
              Delete
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
