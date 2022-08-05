import React, { FC, memo, useCallback, useMemo, useState } from "react";
import classNames from "classnames/bind";
// import { useSearchParams } from "react-router-dom";
// import {
//   useDeleteMovieByIdMutation,
//   useUpdateMovieByIdMutation,
// } from "../../../store/api/apiSlice";
// import useMovie from "../../../context/MovieContext/MovieContext";
import { useModal } from "../../../hooks/useModal";
import { EditMovie } from "../../Modal/EditMovie/EditMovie";
import { MovieCard } from "../MovieCard/MovieCard";
import { DeleteMovie } from "../../Modal/DeleteMovie/DeleteMovie";
import { Movie } from "../../../types/movie.interface";
import { IMovieListProps } from "./MovieList.types";
import styles from "./MovieList.module.scss";

const cx = classNames.bind(styles);

export const MovieList: FC<IMovieListProps> = memo(({ movies }) => {
  const [movieId, setMovieId] = useState(null);
  // const [updateMovie, updateRequestStatus] = useUpdateMovieByIdMutation();
  // const [deleteMovie, deleteRequestStatus] = useDeleteMovieByIdMutation();
  // const [params, setQueryParams] = useSearchParams();

  // const {
  //   isSuccess: isUpdateSuccess,
  //   isError: isUpdateError,
  //   isLoading: isUpdateLoading,
  //   reset: resetUpdate,
  // } = updateRequestStatus;
  // const {
  //   isSuccess: isDeleteSuccess,
  //   isError: isDeleteError,
  //   isLoading: isDeleteLoading,
  //   reset: resetDelete,
  // } = deleteRequestStatus;

  // const [EditModal, toggleEditModal] = useModal(
  //   "Edit movie",
  //   EditMovie,
  //   resetUpdate
  // );
  // const [DeleteModal, toggleDeleteModal] = useModal(
  //   "Delete movie",
  //   DeleteMovie,
  //   resetDelete
  // );

  // const { setHeroMovie, selectedMovie, setSelectedMovie } = useMovie();

  const onMovieCardClick = (movieDetails: Movie) => {
    // setQueryParams({
    //   ...Object.fromEntries(params),
    //   movieId: movieDetails?.id.toString(),
    // });
    // setHeroMovie(movieDetails);
    // setMovieId(movieDetails?.id);
  };

  const onContextMenuClick = useCallback((movieDetails: Movie) => {
    // setSelectedMovie(movieDetails);
  }, []);

  const moviesList = useMemo(
    () =>
      movies.map((movie: Movie) => {
        return (
          <li className={cx("movie-item")} key={movie.id}>
            <MovieCard
              key={movie.id}
              {...movie}
              toggleEditModal={() => {}}
              toggleDeleteModal={() => {}}
              onMovieCardClick={onMovieCardClick}
              onContextMenuClick={onContextMenuClick}
            />
          </li>
        );
      }),
    [movies]
  );

  return (
    <>
      {/* <EditModal
        onFormSubmit={updateMovie}
        formData={selectedMovie}
        isError={isUpdateError}
        isSuccess={isUpdateSuccess}
        isLoading={isUpdateLoading}
      />
      <DeleteModal
        onSubmit={deleteMovie}
        movieId={movieId}
        isError={isDeleteError}
        isSuccess={isDeleteSuccess}
        isLoading={isDeleteLoading}
      /> */}
      <ul id="resultsList" className={cx("movies")}>
        {moviesList}
      </ul>
    </>
  );
});
