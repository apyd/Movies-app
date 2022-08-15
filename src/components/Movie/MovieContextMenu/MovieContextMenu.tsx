import React, { FC } from 'react';
import useMovie from '../../../context/MovieContext/MovieContext';
import { Button } from '../../UI/Button/Button';
import { SvgIcon } from '../../UI/Icon/SvgIcon';
import { ButtonShape, ButtonSize, ButtonVariant } from '../../UI/Button/Button.consts';
import { IMovieContextMenuProps } from './MovieContextMenu.types';
import { ContextMenu, ContextMenuOptions } from './MovieContextMenu.styled';
import { iconTypes } from '../../UI/Icon/SvgIcon.consts';

export const MovieContextMenu: FC<IMovieContextMenuProps> = ({
  movieId,
  toggleEditModal,
  toggleDeleteModal,
  onContextMenuClick
}) => {
  const { openedMovieMenuId, setOpenedMovieMenuId } = useMovie();

  const onMenuButtonClick = () => {
    if (openedMovieMenuId === movieId) {
      return setOpenedMovieMenuId(null);
    }
    setOpenedMovieMenuId(movieId);
  };

  return (
    <>
      <ContextMenu onClick={onContextMenuClick}>
        <Button
          size={ButtonSize.small}
          variant={ButtonVariant.secondary}
          shape={ButtonShape.round}
          onClick={onMenuButtonClick}
        >
          <SvgIcon icon={iconTypes.threeDots} isSmall={true} />
        </Button>
        {openedMovieMenuId === movieId && (
          <ContextMenuOptions>
            <Button
              size={ButtonSize.small}
              shape={ButtonShape.rectangle}
              variant={ButtonVariant.secondary}
              onClick={toggleEditModal}
            >
              Edit
            </Button>
            <Button
              size={ButtonSize.small}
              shape={ButtonShape.rectangle}
              variant={ButtonVariant.secondary}
              onClick={toggleDeleteModal}
            >
              Delete
            </Button>
          </ContextMenuOptions>
        )}
      </ContextMenu>
    </>
  );
};
