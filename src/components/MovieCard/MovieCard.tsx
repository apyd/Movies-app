import React, { FC } from "react";
import { IMovieCardProps } from "./MovieCard.types";
import MovieContextMenu from "../MovieContextMenu/MovieContextMenu";
import "./MovieCard.scss";

export const MovieCard: FC<IMovieCardProps> = ({
  id,
  title,
  posterUrl,
  productionYear,
  genres,
}) => {
  return (
    <li key={id} className="movie-card">
      <div className="poster">
        <MovieContextMenu />
        <img src={posterUrl} alt="movie poster" className="poster__img" />
      </div>
      <section className="details">
        <header className="details__header">
          <h3 className="details__title">{title}</h3>
          <span className="details__production-year">{productionYear}</span>
        </header>
        <span className="details__genres">{genres}</span>
      </section>
    </li>
  );
};
