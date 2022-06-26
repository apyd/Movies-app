import React from "react";
import { Provider } from "react-redux";
import { MovieProvider } from "../../context/MovieContext/MovieContext";
import { ErrorBoundary } from "../../hoc/ErrorBoundary/ErrorBoundary";
import { store } from "../../store/store";
import { Footer } from "../Footer/Footer";
import { Hero } from "../Hero/Hero";
import { Results } from "../Results/Results";
import "./App.scss";

export const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <MovieProvider>
          <Hero />
          <Results />
          <Footer />
        </MovieProvider>
      </Provider>
    </div>
  );
};
