import React, { FC, useState } from 'react';
import { Button } from '../../UI/Button/Button';
import { IMovieContextMenuProps } from './MovieContextMenu.types';
import MenuIcon from '../../../assets/threedots.svg';
import './MovieContextMenu.scss';
import useMovie from '../../../context/MovieContext/MovieContext';
import { ButtonType } from '../../UI/Button/Button.consts';

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

  return (
    <>
      <div className="context-menu">
        <Button variant="secondary" shape="round" onClick={onMenuButtonClick}>
          <MenuIcon className="context-menu__icon" />
        </Button>
        {openedMovieMenuId === movieId && (
          <div className="context-menu__options">
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
