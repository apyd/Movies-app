import { Movie } from '../../../store/api/movie.interface';

export interface IMovieDetailsProps extends Partial<Movie> {
  title: string;
  vote_average: number;
  poster_path: string;
  genres: string[];
  release_date: string;
  runtime: number;
  overview: string;
  onSearchIconPress: () => void;
}
