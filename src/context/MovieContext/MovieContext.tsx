import React, { createContext, FC, useContext, useState } from "react";
import { IMovieContextType, IMovieDetails } from "./MovieContext.types";

const initialState: IMovieContextType = {
  movie: null,
  setMovie: () => {},
  openedMovieMenuId: null,
  setOpenedMovieMenuId: () => {},
};

export const MovieContext = createContext<IMovieContextType>(initialState);

export const MovieProvider: FC = ({ children }) => {
  const [movie, setMovie] = useState<IMovieDetails | null>(null);
  const [openedMovieMenuId, setOpenedMovieMenuId] = useState<number | null>(
    null
  );
  return (
    <MovieContext.Provider
      value={{ movie, setMovie, openedMovieMenuId, setOpenedMovieMenuId }}
    >
      {children}
    </MovieContext.Provider>
  );
};

const useMovie = () => {
  const context = useContext(MovieContext);

  if (context === undefined) {
    throw new Error("useMovie must be used within a MovieProvider");
  }
  return context;
};

export default useMovie;
