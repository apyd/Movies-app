import React, { FC } from "react";
import classNames from "classnames/bind";
import { MovieContextMenu } from "../MovieContextMenu/MovieContextMenu";
import { IMovieCardProps } from "./MovieCard.types";
import DefaultPosterPlaceholder from "../../../assets/default-poster-placeholder.jpeg";
import useMovie from "../../../context/MovieContext/MovieContext";
import { getYearFromDate } from "../../../utils/getYearFromDate";
import styles from "./MovieCard.scss";

export const MovieCard: FC<IMovieCardProps> = ({
  id,
  title,
  vote_average,
  poster_path,
  genres,
  release_date,
  runtime,
  overview,
  toggleEditModal,
  toggleDeleteModal,
  setMovieId,
}) => {
  const cx = classNames.bind(styles);
  const { setHeroMovie } = useMovie();
  const movieDetails = {
    id,
    title,
    vote_average,
    poster_path,
    genres,
    release_date,
    runtime,
    overview,
  };

  const onMovieCardClick = () => {
    setMovieId(id);
    setHeroMovie(movieDetails);
  };

  return (
    <li key={id} className={cx("movie-card")} onClick={onMovieCardClick}>
      <div className={cx("poster")}>
        <MovieContextMenu
          movieId={id}
          toggleDeleteModal={toggleDeleteModal}
          toggleEditModal={toggleEditModal}
        />
        <img
          src={poster_path}
          alt="movie poster"
          className={cx("poster__img")}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = DefaultPosterPlaceholder;
          }}
        />
      </div>
      <section className={cx("details")}>
        <header className={cx("details__header")}>
          <div className={cx("title__wrapper")}>
            <h3 className={cx("details__title")}>{title}</h3>
          </div>
          <span className={cx("details__production-year")}>
            {getYearFromDate(release_date)}
          </span>
        </header>
        <span className={cx("details__genres")}>{genres}</span>
      </section>
    </li>
  );
};
