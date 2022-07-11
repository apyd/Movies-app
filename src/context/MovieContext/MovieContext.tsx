import React, { createContext, FC, useContext, useState } from "react";
import { IMovieContextType, IMovieDetails } from "./MovieContext.types";

const initialState: IMovieContextType = {
  heroMovie: null,
  setHeroMovie: () => {},
  selectedMovie: null,
  setSelectedMovie: () => {},
  openedMovieMenuId: null,
  setOpenedMovieMenuId: () => {},
};

export const MovieContext = createContext<IMovieContextType>(initialState);

export const MovieProvider: FC = ({ children }) => {
  const [heroMovie, setHeroMovie] = useState<IMovieDetails | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<IMovieDetails | null>(
    null
  );
  const [openedMovieMenuId, setOpenedMovieMenuId] = useState<number | null>(
    null
  );

  return (
    <MovieContext.Provider
      value={{
        heroMovie,
        setHeroMovie,
        selectedMovie,
        setSelectedMovie,
        openedMovieMenuId,
        setOpenedMovieMenuId,
      }}
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
