export interface EditMovieFormData {
  id: number;
  title: string;
  poster_path: string;
  genres: string[];
  release_date: string;
  vote_average: number;
  runtime: number;
  overview: string;
}

export interface IEditMovieProps {
  onFormSubmit: any;
  isError: boolean;
  formData: EditMovieFormData;
  isLoading: boolean;
  isSuccess: boolean;
  toggleModal: any;
}
