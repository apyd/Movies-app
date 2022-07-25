export interface AddMovieFormData {
  title: string;
  poster_path: string;
  genres: string[];
  release_date: string;
  vote_average: number;
  runtime: number;
  overview: string;
}

export interface IAddMovieProps {
  onFormSubmit: any;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  toggleModal: any;
}
