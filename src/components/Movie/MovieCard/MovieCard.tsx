import React, { FC } from "react";
import { MovieContextMenu } from "../MovieContextMenu/MovieContextMenu";
import { IMovieCardProps } from "./MovieCard.types";
import "./MovieCard.scss";

export const MovieCard: FC<IMovieCardProps> = ({
  id,
  title,
  poster_url,
  production_year,
  genres,
  toggleEditModal,
  toggleDeleteModal,
}) => {
  return (
    <li key={id} className="movie-card">
      <div className="poster">
        <MovieContextMenu
          toggleDeleteModal={toggleDeleteModal}
          toggleEditModal={toggleEditModal}
        />
        <img src={poster_url} alt="movie poster" className="poster__img" />
      </div>
      <section className="details">
        <header className="details__header">
          <div className="title__wrapper">
            <h3 className="details__title">{title}</h3>
          </div>
          <span className="details__production-year">{production_year}</span>
        </header>
        <span className="details__genres">{genres}</span>
      </section>
    </li>
  );
};
