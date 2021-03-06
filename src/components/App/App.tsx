import React from "react";
import { MovieProvider } from "../../context/MovieContext/MovieContext";
import { ErrorBoundary } from "../../hoc/ErrorBoundary/ErrorBoundary";
import { Footer } from "../Footer/Footer";
import { Hero } from "../Hero/Hero";
import { Results } from "../Results/Results";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <MovieProvider>
          <Hero />
          <Results />
          <Footer />
        </MovieProvider>
      </ErrorBoundary>
    </div>
  );
};
