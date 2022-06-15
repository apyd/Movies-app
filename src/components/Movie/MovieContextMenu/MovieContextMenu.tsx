import React, { useState } from "react";
import { Button } from "../../UI/Button/Button";
import MenuIcon from "../../../assets/threedots.svg";
import "./MovieContextMenu.scss";

export const MovieContextMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
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
          <Button variant="secondary" onClick={() => {}}>
            Edit
          </Button>
          <Button variant="secondary" onClick={() => {}}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};
