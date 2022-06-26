import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import { Provider } from "react-redux";
import { MovieProvider } from "../../context/MovieContext/MovieContext";
import { ErrorBoundary } from "../../hoc/ErrorBoundary/ErrorBoundary";
import { apiSlice } from "../../store/api/apiSlice";
import { store } from "../../store/store";
import { Footer } from "../Footer/Footer";
import { Hero } from "../Hero/Hero";
import { Results } from "../Results/Results";
import "./App.scss";

export const App = () => {
  // console.log(apiSlice);
  return (
    <div className="app">
      <ErrorBoundary>
        <ApiProvider api={apiSlice}>
          <MovieProvider>
            <Hero />
            <Results />
            <Footer />
          </MovieProvider>
        </ApiProvider>
      </ErrorBoundary>
    </div>
  );
};
