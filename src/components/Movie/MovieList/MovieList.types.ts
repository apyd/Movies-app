import { IMovieCardProps } from "../MovieCard/MovieCard.types";

export interface IMovieListProps extends Partial<Movie> {
  id: number,
  title: string,
  vote_average: number,
  release_date: string,
  poster_path: string,
  overview: string,
  genres: string[],
  runtime: number,
}
