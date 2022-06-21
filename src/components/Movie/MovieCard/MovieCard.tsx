import React, { FC } from "react";
import { MovieContextMenu } from "../MovieContextMenu/MovieContextMenu";
import { IMovieCardProps } from "./MovieCard.types";
import "./MovieCard.scss";
import useMovie from "../../../context/MovieContext/MovieContext";

export const MovieCard: FC<IMovieCardProps> = ({
  id,
  title,
  rating,
  poster_url,
  genres,
  release_year,
  runtime,
  description,
  toggleEditModal,
  toggleDeleteModal,
}) => {
  const { setMovie } = useMovie();

  const movieDetails = {
    id,
    title,
    rating,
    poster_url,
    genres,
    release_year,
    runtime,
    description,
  };

  const onMovieCardClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setMovie(movieDetails);
  };

  return (
    <li key={id} className="movie-card" onClick={(e) => onMovieCardClick(e)}>
      <div className="poster">
        <MovieContextMenu
          movieId={id}
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
          <span className="details__production-year">{release_year}</span>
        </header>
        <span className="details__genres">{genres}</span>
      </section>
    </li>
  );
};
