import React from "react";
import ErrorBoundary from "../../hoc/ErrorBoundary/ErrorBoundary";
import { Hero } from "../Hero/Hero";
import { Results } from "../Results/Results";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <Hero />
        <Results />
      </ErrorBoundary>
    </div>
  );
};
