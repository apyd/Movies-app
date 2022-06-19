import React, { useState } from "react";
import { useModal } from "../../../hooks/useModal";
import { Button } from "../../UI/Button/Button";
import { EditMovie } from "../../Modal/MovieForm/EditMovie/EditMovie";
import { DeleteMovie } from "../../Modal/Confirmation/DeleteMovie/DeleteMovie";
import MenuIcon from "../../../assets/threedots.svg";
import "./MovieContextMenu.scss";

export const MovieContextMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDeleteModalOpened, toggleDeleteModal] = useModal();
  const [isEditModalOpened, toggleEditModal] = useModal();

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
      <EditMovie isOpened={isEditModalOpened} toggleModal={toggleEditModal} />
      <DeleteMovie
        isOpened={isDeleteModalOpened}
        toggleModal={toggleDeleteModal}
      />
    </>
  );
};
