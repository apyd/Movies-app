import React, { useState } from "react";
import { Button } from "../UI/Button/Button";
import { ReactComponent as MenuIcon } from "../../assets/threedots.svg";
import "./MovieContextMenu.scss";

const MovieContextMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="context-menu">
      <Button
        variant="secondary"
        shape="round"
        onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
      >
        <MenuIcon width="1rem" />
      </Button>
      {!isCollapsed && (
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

export default MovieContextMenu;
