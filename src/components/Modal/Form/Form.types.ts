import { FormikErrors, FormikState, FormikTouched } from "formik";
import { AddMovieFormData } from "../AddMovie/AddMovie.types";
import { EditMovieFormData } from "../EditMovie/EditMovieFormData";

export interface IFormProps {
  isValid: boolean;
  values: AddMovieFormData | EditMovieFormData;
  errors: FormikErrors<AddMovieFormData>;
  touched: FormikTouched<AddMovieFormData>
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void
  setFieldValue: (field: string, value: string[], shouldValidate?: boolean) => Promise<void> | Promise<FormikErrors<AddMovieFormData>>
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  resetForm: (nextState?: Partial<FormikState<AddMovieFormData>>) => void;
}
