import React, { FC, useCallback } from "react";
import classNames from "classnames/bind";
// import useMovie from "../../../context/MovieContext/MovieContext";
import { Button } from "../../UI/Button/Button";
import { SvgIcon } from "../../UI/Icon/SvgIcon";
import MenuIcon from "../../../assets/threedots.svg";
import { ButtonVariant } from "../../UI/Button/Button.consts";
import { IMovieContextMenuProps } from "./MovieContextMenu.types";
import styles from "./MovieContextMenu.module.scss";

const cx = classNames.bind(styles);

export const MovieContextMenu: FC<IMovieContextMenuProps> = ({
  movieId,
  toggleEditModal,
  toggleDeleteModal,
  onContextMenuClick,
}) => {
  // const { openedMovieMenuId, setOpenedMovieMenuId } = useMovie();

  const onMenuButtonClick = () => {
    // if (openedMovieMenuId === movieId) {
    //   return setOpenedMovieMenuId(null);
    // }
    // setOpenedMovieMenuId(movieId);
  };

  return (
    <>
      <div className={cx("context-menu")} onClick={onContextMenuClick}>
        <Button variant="secondary" shape="round" onClick={onMenuButtonClick}>
          <SvgIcon icon={MenuIcon} isSmall />
        </Button>
        {/* {openedMovieMenuId === movieId && ( */}
        <div className={cx("context-menu__options")}>
          <Button variant={ButtonVariant.secondary} onClick={toggleEditModal}>
            Edit
          </Button>
          <Button variant={ButtonVariant.secondary} onClick={toggleDeleteModal}>
            Delete
          </Button>
        </div>
        {/* )} */}
      </div>
    </>
  );
};
