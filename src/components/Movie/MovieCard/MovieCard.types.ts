import { Movie } from "../../../store/api/movie.interface"

export interface IMovieCardProps extends Partial<Movie> {
  id: number,
  title: string,
  vote_average: number,
  release_date: string,
  poster_path: string,
  overview: string,
  genres: string[],
  runtime: number,
  toggleEditModal: any,
  toggleDeleteModal: any,
  onMovieCardClick: (id: number, movieDetails: Partial<Movie>) => void;
}
