import React, { FC } from "react";
import { Logo } from "../../Logo/Logo";
import { Button } from "../../UI/Button/Button";
import { ButtonType } from "../../UI/Button/Button.consts";
import { IMovieViewProps } from "./MovieView.types";
import SearchIcon from "../../../assets/search.svg";
import "./MovieView.scss";

export const MovieView: FC<IMovieViewProps> = ({
  title,
  vote_average,
  poster_path,
  genres,
  release_date,
  runtime,
  overview,
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
          <img src={poster_path} alt="movie poster" />
        </div>
        <div className="movie_view__details">
          <header className="movie-view__header">
            <h1 className="movie-view__heading">{title}</h1>
            <span className="movie-view__vote-average">{vote_average}</span>
          </header>
          <span className="movie-view__info movie-view__info--grey movie-view__info--block movie-view__info--small">
            {genres && genres.toString()}
          </span>
          <span className="movie-view__info movie-view__info--red movie-view__info--large">
            {release_date}
          </span>
          <span className="movie-view__info movie-view__info--red movie-view__info--large">
            {runtime}
          </span>
          <p className="movie-view__info movie-view__info--alt-grey">
            {overview}
          </p>
        </div>
      </section>
    </>
  );
};
