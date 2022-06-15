import React from "react";
import { Button } from "../../../UI/Button/Button";
import { Modal } from "../../Modal";

export const DeleteMovie = () => {
  return (
    <Modal title="Delete movie" toggleModal={() => {}} isOpened="true">
      <p className="delete-text">Are you sure you want to delete this movie?</p>
      <div className="delete-actions">
        <Button onClick={() => {}}>Confirm</Button>
      </div>
    </Modal>
  );
};
