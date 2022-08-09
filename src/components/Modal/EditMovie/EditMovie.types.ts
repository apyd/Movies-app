import { AddMovieFormData } from "../AddMovie/AddMovie.types";

export interface EditMovieFormData extends AddMovieFormData {
  id: number;
}

export interface IEditMovieProps {
  onFormSubmit: (values: EditMovieFormData) => void;
  isError: boolean;
  formData: EditMovieFormData;
  isLoading: boolean;
  isSuccess: boolean;
  toggleModal: () => void;
}
