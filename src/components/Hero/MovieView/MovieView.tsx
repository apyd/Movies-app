import React, { FC } from "react";
import { Logo } from "../../Logo/Logo";
import { Button } from "../../UI/Button/Button";
import { ButtonType } from "../../UI/Button/Button.consts";
import { IMovieViewProps } from "./MovieView.types";
import SearchIcon from "../../../assets/search.svg";
import "./MovieView.scss";

export const MovieView: FC<IMovieViewProps> = ({
  title,
  rating,
  poster_url,
  genres,
  release_year,
  runtime,
  description,
  onSearchIconPress,
}) => {
  return (
    <>
      <div className="movie-view__top-banner">
        <Logo />
        <Button variant={ButtonType.ghost} onClick={onSearchIconPress}>
          <SearchIcon className="icon" />
        </Button>
      </div>
      <section className="movie-view__content">
        <div className="movie-view__poster">
          <img src={poster_url} alt="movie poster" />
        </div>
        <div className="movie_view__details">
          <header className="movie-view__header">
            <h1 className="movie-view__heading">{title}</h1>
            <span className="movie-view__rating">{rating}</span>
          </header>
          <span className="movie-view__info movie-view__info--grey movie-view__info--block movie-view__info--small">
            {genres && genres.toString()}
          </span>
          <span className="movie-view__info movie-view__info--red movie-view__info--large">
            {release_year}
          </span>
          <span className="movie-view__info movie-view__info--red movie-view__info--large">
            {runtime}
          </span>
          <p className="movie-view__info movie-view__info--alt-grey">
            {description}
          </p>
        </div>
      </section>
    </>
  );
};
