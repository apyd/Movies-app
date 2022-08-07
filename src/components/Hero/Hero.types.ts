import { Movie } from "../../types/movie.interface";

export interface CustomizedState {
  searchQuery: string | null;
  movieId: number | null;
  genre: string | null;
  sort: string | null;
}

export interface IHeroProps {
  movie?: Movie
}