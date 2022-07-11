import { Movie } from '../../../store/api/movie.interface';

export interface IMovieListProps {
  data: Movie[],
  onCardClick: any
};
