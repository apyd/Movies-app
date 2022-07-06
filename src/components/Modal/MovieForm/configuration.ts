import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title can't be shorter than 2 characters!")
    .max(50, "Exceeded limit of characters - 50!")
    .required("This field is required"),
  poster_path: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url! Remember to start with https://www"
    )
    .required("This field is required"),
  genres: Yup.array()
    .min(1, "Please provide at least 1 genre")
    .required("This field is required"),
  release_date: Yup.date().required("This field is required"),
  runtime: Yup.number()
    .min(1, "Runtime cannot be less than 1 minute")
    .max(300, "Exceeded limit - 300 minutes")
    .required("This field is required"),
  overview: Yup.string()
    .min(5, "Overview requires at least 5 characters!")
    .max(500, "Exceeded limit of characters - 500!")
    .required("This field is required"),
});