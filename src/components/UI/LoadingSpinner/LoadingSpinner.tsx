import React from "react";
import "./LoadingSpinner.scss";

export const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__icon"></div>
      <span className="spinner_text">Loading...</span>
    </div>
  );
};
