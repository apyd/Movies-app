export interface IMovieDetails {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  genres: string[],
  release_date: string;
  runtime: string;
  overview: string;
}

export interface IMovieContextType {
  movie: null | IMovieDetails;
  setMovie: (movie: IMovieDetails | null) => void;
  openedMovieMenuId: null | string;
  setOpenedMovieMenuId: (id: number | null) => void;
}