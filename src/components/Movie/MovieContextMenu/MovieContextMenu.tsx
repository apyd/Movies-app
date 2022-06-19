import React, { FC, useState } from "react";
import { Button } from "../../UI/Button/Button";
import { IMovieContextMenuProps } from "./MovieContextMenu.types";
import MenuIcon from "../../../assets/threedots.svg";
import "./MovieContextMenu.scss";

export const MovieContextMenu: FC<IMovieContextMenuProps> = ({
  toggleEditModal,
  toggleDeleteModal,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <div className="context-menu">
        <Button
          variant="secondary"
          shape="round"
          onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
        >
          <MenuIcon className="context-menu__icon" />
        </Button>
        {isCollapsed && (
          <div className="context-menu__options">
            <Button variant="secondary" onClick={toggleEditModal}>
              Edit
            </Button>
            <Button variant="secondary" onClick={toggleDeleteModal}>
              Delete
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
