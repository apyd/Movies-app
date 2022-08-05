import React, { useState } from 'react';
// import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import classNames from 'classnames/bind';
// import {
//   useAddMovieMutation,
//   useGetMovieByIdQuery,
// } from "../../store/api/apiSlice";
// import { useModal } from "../../hooks/useModal";
// import { AddMovie } from "../Modal/AddMovie/AddMovie";
// import { SearchView } from "./SearchView/SearchView";
// import { MovieDetails } from "./MovieDetails/MovieDetails";
import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

export const Hero = () => {
  // const [addMovie, { isLoading, isError, isSuccess, reset }] =
  //   useAddMovieMutation();
  // const [AddMovieModal, toggleModal] = useModal("Add movie", AddMovie, reset);
  // const navigate = useNavigate();
  // const { searchQuery } = useParams();
  // const [params, setQueryParams] = useSearchParams();
  // const movieId = params.get("movieId");
  // const { data: movie, isLoading: isDataLoading } =
  //   useGetMovieByIdQuery(movieId);

  // const [query, setQuery] = useState(searchQuery || "");

  const onChange = (value: string) => {
    // setQuery(value);
  };

  const onSearch = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };
  //   const queryParams =
  //     "?" + new URLSearchParams(params).toString().replace("filter", "genre");
  //   navigate(`../search/${query}${queryParams}`);
  // };

  const switchToSearchView = () => {
    // const queryParams = { ...Object.fromEntries(params) };
    // const { movieId, ...filteredQueryParams } = queryParams;
    // setQueryParams(filteredQueryParams);
  };

  //   return (
  //     <div className={cx(styles.hero, { "hero--search": !movieId })}>
  //       <div className={cx("hero__inner")}>
  //         {movieId && !isDataLoading ? (
  //           <MovieDetails onSearchIconPress={switchToSearchView} {...movie} />
  //         ) : (
  //           <SearchView
  //             toggleModal={toggleModal}
  //             value={query}
  //             onChange={onChange}
  //             onSearch={onSearch}
  //           />
  //         )}
  //       </div>
  //       <AddMovieModal
  //         onFormSubmit={addMovie}
  //         isError={isError}
  //         isSuccess={isSuccess}
  //         isLoading={isLoading}
  //       />
  //     </div>
  //   );
  // };

  return <p>Hero</p>;
};
