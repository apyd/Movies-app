import React, { FC } from 'react';
import { MovieContextMenu } from '../MovieContextMenu/MovieContextMenu';
import { IMovieCardProps } from './MovieCard.types';
import DefaultPosterPlaceholder from '../../../assets/default-poster-placeholder.jpeg';
import './MovieCard.scss';
import useMovie from '../../../context/MovieContext/MovieContext';
import { getYearFromDate } from '../../../utils/getYearFromDate';

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
  toggleDeleteModal
}) => {
  const { setMovie } = useMovie();

  const movieDetails = {
    id,
    title,
    vote_average,
    poster_path,
    genres,
    release_date,
    runtime,
    overview
  };

  const onMovieCardClick = () => {
    setMovie(movieDetails);
  };

  return (
    <li key={id} className="movie-card" onClick={onMovieCardClick}>
      <div className="poster">
        <MovieContextMenu
          movieId={id}
          toggleDeleteModal={toggleDeleteModal}
          toggleEditModal={toggleEditModal}
        />
        <img
          src={poster_path}
          alt="movie poster"
          className="poster__img"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = DefaultPosterPlaceholder;
          }}
        />
      </div>
      <section className="details">
        <header className="details__header">
          <div className="title__wrapper">
            <h3 className="details__title">{title}</h3>
          </div>
          <span className="details__production-year">{getYearFromDate(release_date)}</span>
        </header>
        <span className="details__genres">{genres}</span>
      </section>
    </li>
  );
};
