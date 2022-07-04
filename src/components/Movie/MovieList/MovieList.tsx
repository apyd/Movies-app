import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import {
  useDeleteMovieByIdMutation,
  useUpdateMovieByIdMutation,
} from "../../../store/api/apiSlice";
import { useModal } from "../../../hooks/useModal";
import { MovieForm } from "../../Modal/MovieForm/MovieForm";
import { MovieCard } from "../MovieCard/MovieCard";
import { DeleteMovie } from "../../Modal/DeleteMovie/DeleteMovie";
import { IMovieListProps } from "./MovieList.types";
import styles from "./MovieList.scss";

export const MovieList: FC<IMovieListProps> = (props) => {
  const [movieId, setMovieId] = useState(null);
  const [EditModal, toggleEditModal] = useModal("Edit movie", MovieForm);
  const [DeleteModal, toggleDeleteModal] = useModal(
    "Delete movie",
    DeleteMovie
  );
  const [updateMovie] = useUpdateMovieByIdMutation();
  const [deleteMovie] = useDeleteMovieByIdMutation();
  const cx = classNames.bind(styles);

  return (
    <>
      {/* @ts-ignore - FIX IT*/}
      <EditModal onSubmit={updateMovie} formData={[]} />
      {/* @ts-ignore FIX-IT*/}
      <DeleteModal onSubmit={deleteMovie} movieId={movieId} />
      <ul className={cx("movies")}>
        {props.data.map((movieData) => {
          return (
            <MovieCard
              key={movieData.id}
              {...movieData}
              toggleEditModal={toggleEditModal}
              toggleDeleteModal={toggleDeleteModal}
              setMovieId={setMovieId}
            />
          );
        })}
      </ul>
    </>
  );
};
