import { createContext, useContext, useState } from "react";

interface IMovieDetails {
  id: string;
  title: string;
  rating: string;
  poster_url: string;
  genres: string[];
  release_year: string;
  runtime: string;
  description: string;
}

interface IMovieContextType {
  movie: null | IMovieDetails;
  setMovie: (movie: IMovieDetails) => void;
}

const initialState = {
  movie: null,
  setMovie: () => {},
};

export const MovieContext = createContext<IMovieContextType | null>(
  initialState
);

export const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState<IMovieDetails | null>(null);
  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
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
