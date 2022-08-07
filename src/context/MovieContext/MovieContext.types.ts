import { Dispatch, SetStateAction } from 'react';

export interface IMovieDetails {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  genres: string[];
  release_date: string;
  runtime: number;
  overview: string;
}

export interface IMovieContextType {
  heroMovie: null | IMovieDetails;
  setHeroMovie: (movie: IMovieDetails | null) => void;
  selectedMovie: null | IMovieDetails;
  setSelectedMovie: (movie: IMovieDetails | null) => void;
  openedMovieMenuId: null | number;
  setOpenedMovieMenuId: (id: number | null) => void;
}
