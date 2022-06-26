import { Movie } from "../../../store/api/apiTypes"

export interface IMovieCardProps extends Partial<Movie> {
  id: number,
  title: string,
  vote_average: number,
  release_date: string,
  poster_path: string,
  overview: string,
  genres: string[],
  runtime: number,
  toggleEditModal: any // FIX IT
  toggleDeleteModal: any // FIX IT
}