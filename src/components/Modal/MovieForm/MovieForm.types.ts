export interface IMovieFormProps {
  onSubmit: any, //FIX IT
  formData: MovieFormData,
  toggleModal: any //FIX: TODO
}


export interface MovieFormData {
  id: number,
  title: string,
  posterPath: string,
  genres: string[],
  release_date: string,
  vote_average: number,
  runtime: number,
  overview: string,
}