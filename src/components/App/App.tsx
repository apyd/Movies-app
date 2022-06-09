import React from "react";
import { Hero } from "../../containers/Hero/Hero";
import { Results } from "../../containers/Results/Results";
import { ResultsModifiers } from "../../containers/ResultsModifiers/ResultsModifiers";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <Hero />
      <ResultsModifiers />
      <Results />
    </div>
  );
};
