import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { Logo } from '../../Logo/Logo';
import { Button } from '../../UI/Button/Button';
import { ButtonType } from '../../UI/Button/Button.consts';
import { IMovieViewProps } from './MovieView.types';
import SearchIcon from '../../../assets/search.svg';
import DefaultPosterPlaceholder from '../../../assets/default-poster-placeholder.jpeg';
import { getYearFromDate } from '../../../utils/getYearFromDate';
import { transformMinutesToHoursAndMinutes } from '../../../utils/transformTime';
import styles from './MovieView.scss';
import { SvgIcon } from '../../UI/Icon/SvgIcon';

export const MovieView: FC<IMovieViewProps> = ({
  title,
  vote_average,
  poster_path,
  genres,
  release_date,
  runtime,
  overview,
  onSearchIconPress
}) => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('movie-view')}>
      <div className={cx('movie-view__top-banner')}>
        <Logo />
        <Button variant={ButtonType.ghost} onClick={onSearchIconPress}>
          <SvgIcon icon={SearchIcon} />
        </Button>
      </div>
      <section className={cx('movie-view__content')}>
        <div className={cx('movie-view__poster')}>
          <img
            src={poster_path}
            alt="movie poster"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = DefaultPosterPlaceholder;
            }}
            className={cx("movie-view__img")}
          />
        </div>
        <div className={cx('movie_view__details')}>
          <header className={cx('movie-view__header')}>
            <h1 className={cx('movie-view__heading')}>{title}</h1>
            <span className={cx('movie-view__vote-average')}>{vote_average}</span>
          </header>
          <span className={cx('movie-view__genres')}>{genres && genres.toString()}</span>
          <span className={cx('movie-view__release-date')}>{getYearFromDate(release_date)}</span>
          <span className={cx('movie-view__runtime')}>
            {transformMinutesToHoursAndMinutes(runtime)}
          </span>
          <p className={cx('movie-view__overview')}>{overview}</p>
        </div>
      </section>
    </div>
  );
};
