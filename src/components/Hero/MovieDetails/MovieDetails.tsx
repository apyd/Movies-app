import React, { FC } from 'react';
import { Logo } from '../../UI/Logo/Logo';
import { getYearFromDate } from '../../../utils/getYearFromDate';
import { transformMinutesToHoursAndMinutes } from '../../../utils/transformTime';
import { Button } from '../../UI/Button/Button';
import { SvgIcon } from '../../UI/Icon/SvgIcon';
// import DefaultPosterPlaceholder from '../../../assets/default-poster-placeholder.jpeg';
import { ButtonShape, ButtonSize, ButtonVariant } from '../../UI/Button/Button.consts';
import { IMovieDetailsProps } from './MovieDetails.types';
import {
  MovieDetailsWrapper,
  MovieDetailsTopBanner,
  MovieDetailsContent,
  MovieDetailsDataWrapper,
  MovieDetailsHeading,
  MovieDetailsHeader,
  VoteAverage,
  Genres,
  Overview,
  TimeDetails,
  Poster,
  PosterWrapper
} from './MovieDetails.styled';
import { LogoSize } from '../../UI/Logo/Logo.const';
import { iconTypes } from '../../UI/Icon/SvgIcon.consts';

export const MovieDetails: FC<IMovieDetailsProps> = ({
  title = '',
  vote_average = 0,
  poster_path = '',
  genres = [],
  release_date = '',
  runtime = 0,
  overview = '',
  onSearchIconPress
}) => {
  return (
    <MovieDetailsWrapper id="movieDetails">
      <MovieDetailsTopBanner>
        <Logo size={LogoSize.medium} />
        <Button
          size={ButtonSize.medium}
          shape={ButtonShape.rectangle}
          variant={ButtonVariant.ghost}
          onClick={onSearchIconPress}
        >
          <SvgIcon isSmall={false} icon={iconTypes.search} />
        </Button>
      </MovieDetailsTopBanner>
      <MovieDetailsContent>
        <PosterWrapper>
          <Poster
            src={poster_path}
            alt="movie poster"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              // currentTarget.src = DefaultPosterPlaceholder;
            }}
          />
        </PosterWrapper>
        <MovieDetailsDataWrapper>
          <MovieDetailsHeader>
            <MovieDetailsHeading id="movieTitle">{title}</MovieDetailsHeading>
            <VoteAverage>{vote_average}</VoteAverage>
          </MovieDetailsHeader>
          <Genres>{genres && genres.join(', ')}</Genres>
          <TimeDetails>{getYearFromDate(release_date)}</TimeDetails>
          <TimeDetails>{transformMinutesToHoursAndMinutes(runtime)}</TimeDetails>
          <Overview>{overview}</Overview>
        </MovieDetailsDataWrapper>
      </MovieDetailsContent>
    </MovieDetailsWrapper>
  );
};
