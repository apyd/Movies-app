import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, "Title can't be shorter than 1 character!")
    .required('Title is required'),
  poster_path: Yup.string()
    .matches(
      /^http[s]?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      'Enter correct url! Remember to start with http or https://'
    )
    .required('Poster path is required'),
  genres: Yup.array()
    .min(1, 'Please provide at least 1 genre')
    .required('At least one genre is required'),
  release_date: Yup.date(),
  runtime: Yup.number()
    .min(0, 'Runtime cannot be less than 0')
    .max(128, 'Exceeded limit - 128 minutes')
    .required('Runtime is required'),
  overview: Yup.string()
    .min(1, 'Overview requires at least 1 character!')
    .required('Overview is required')
});
