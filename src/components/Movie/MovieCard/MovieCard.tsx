import React, { FC } from 'react';
import { getYearFromDate } from '../../../utils/getYearFromDate';
import { MovieContextMenu } from '../MovieContextMenu/MovieContextMenu';
import {
  CardDetails,
  CardHeader,
  CardPoster,
  CardPosterWrapper,
  MovieCardWrapper,
  MovieGenres,
  MovieProductionYear,
  MovieTitle,
  MovieTitleWrapper
} from './MovieCard.styled';
// import DefaultPosterPlaceholder from '../../../assets/default-poster-placeholder.jpeg';
import { IMovieCardProps } from './MovieCard.types';

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
  onContextMenuClick,
  onMovieCardClick
}) => {
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

  return (
    <MovieCardWrapper>
      <CardPosterWrapper>
        <MovieContextMenu
          movieId={id}
          onContextMenuClick={() => onContextMenuClick(movieDetails)}
          toggleDeleteModal={toggleDeleteModal}
          toggleEditModal={toggleEditModal}
        />
        <CardPoster
          src={poster_path}
          alt="movie poster"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            // currentTarget.src = DefaultPosterPlaceholder;
          }}
          onClick={() => onMovieCardClick(movieDetails)}
        />
      </CardPosterWrapper>
      <CardDetails onClick={() => onMovieCardClick(movieDetails)}>
        <CardHeader>
          <MovieTitleWrapper>
            <MovieTitle>{title}</MovieTitle>
          </MovieTitleWrapper>
          <MovieProductionYear>{getYearFromDate(release_date)}</MovieProductionYear>
        </CardHeader>
        <MovieGenres>{genres.join(', ')}</MovieGenres>
      </CardDetails>
    </MovieCardWrapper>
  );
};
