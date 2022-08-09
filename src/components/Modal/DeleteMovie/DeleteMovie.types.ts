export interface IDeleteMovieProps {
  movieId: number;
  onSubmit: (id: number) => void;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
}