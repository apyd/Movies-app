import React, { FC } from "react";
import classNames from "classnames/bind";
import { Logo } from "../../UI/Logo/Logo";
import { getYearFromDate } from "../../../utils/getYearFromDate";
import { transformMinutesToHoursAndMinutes } from "../../../utils/transformTime";
import { Button } from "../../UI/Button/Button";
import { SvgIcon } from "../../UI/Icon/SvgIcon";
import SearchIcon from "../../../assets/search.svg";
import DefaultPosterPlaceholder from "../../../assets/default-poster-placeholder.jpeg";
import { ButtonVariant } from "../../UI/Button/Button.consts";
import { IMovieDetailsProps } from "./MovieDetails.types";
import styles from "./MovieDetails.module.scss";

const cx = classNames.bind(styles);

export const MovieDetails: FC<IMovieDetailsProps> = ({
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
    <div id="movieDetails" className={cx("movie-details")}>
      <div className={cx("movie-details__top-banner")}>
        <Logo />
        <Button variant={ButtonVariant.ghost} onClick={onSearchIconPress}>
          <SvgIcon icon={SearchIcon} />
        </Button>
      </div>
      <section className={cx("movie-details__content")}>
        <div className={cx("movie-details__poster")}>
          <img
            src={poster_path}
            alt="movie poster"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = DefaultPosterPlaceholder;
            }}
            className={cx("movie-details__img")}
          />
        </div>
        <div className={cx("movie_hero__details")}>
          <header className={cx("movie-details__header")}>
            <h1 id="movieTitle" className={cx("movie-details__heading")}>
              {title}
            </h1>
            <span className={cx("movie-details__vote-average")}>
              {vote_average}
            </span>
          </header>
          <span className={cx("movie-details__genres")}>
            {genres && genres.join(", ")}
          </span>
          <span className={cx("movie-details__release-date")}>
            {getYearFromDate(release_date)}
          </span>
          <span className={cx("movie-details__runtime")}>
            {transformMinutesToHoursAndMinutes(runtime)}
          </span>
          <p className={cx("movie-details__overview")}>{overview}</p>
        </div>
      </section>
    </div>
  );
};
