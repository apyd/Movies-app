import React, { FC } from "react";
import { useModal } from "../../../hooks/useModal";
import { MovieCard } from "../MovieCard/MovieCard";
import { EditMovie } from "../../Modal/MovieForm/EditMovie/EditMovie";
import { DeleteMovie } from "../../Modal/Confirmation/DeleteMovie/DeleteMovie";
import { IMovieListProps } from "./MovieList.types";
import "./MovieList.scss";

export const MovieList: FC<IMovieListProps> = (props) => {
  const [isDeleteModalOpened, toggleDeleteModal] = useModal();
  const [isEditModalOpened, toggleEditModal] = useModal();

  const moviesData = Object.values(props);

  return (
    <>
      <EditMovie toggleModal={toggleEditModal} isOpened={isEditModalOpened} />
      <DeleteMovie
        toggleModal={toggleDeleteModal}
        isOpened={isDeleteModalOpened}
      />
      <ul className="movies">
        {moviesData.map((movieData) => {
          return (
            <MovieCard
              key={movieData.id}
              {...movieData}
              toggleEditModal={toggleEditModal}
              toggleDeleteModal={toggleDeleteModal}
            />
          );
        })}
      </ul>
    </>
  );
};
