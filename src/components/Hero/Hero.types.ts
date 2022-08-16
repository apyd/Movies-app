import { Movie } from '../../types/movie.interface';

export interface IHeroProps {
  movie?: Movie;
}

export interface HeroContainerProps {
  movieId: string | string[] | undefined;
}
