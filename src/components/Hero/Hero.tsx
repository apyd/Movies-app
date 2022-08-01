import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useAddMovieMutation } from '../../store/api/apiSlice';
import { useModal } from '../../hooks/useModal';
import useMovie from '../../context/MovieContext/MovieContext';
import { AddMovie } from '../Modal/AddMovie/AddMovie';
import { SearchView } from './SearchView/SearchView';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './Hero.scss';

const cx = classNames.bind(styles);

export const Hero = () => {
  const [addMovie, { isLoading, isError, isSuccess, reset }] = useAddMovieMutation();
  const [AddMovieModal, toggleModal] = useModal('Add movie', AddMovie, reset);
  const { heroMovie } = useMovie();
  const navigate = useNavigate();
  const { searchQuery } = useParams();
  const [params, setQueryParams] = useSearchParams();
  const movieId = params.get('movieId');

  const [query, setQuery] = useState(searchQuery || '');

  const onSearch = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(`../search/${query}`, {
      replace: true,
      state: { searchQuery: query }
    });
  };

  const switchToSearchView = () => {
    setQueryParams({}, { replace: false });
  };

  return (
    <div className={cx(styles.hero, { 'hero--search': !movieId })}>
      <div className={cx('hero__inner')}>
        {movieId ? (
          <MovieDetails onSearchIconPress={switchToSearchView} {...heroMovie} />
        ) : (
          <SearchView
            toggleModal={toggleModal}
            value={query}
            onChange={setQuery}
            onSearch={onSearch}
          />
        )}
      </div>
      {/* @ts-ignore - FIX IT */}
      <AddMovieModal
        onFormSubmit={addMovie}
        isError={isError}
        isSuccess={isSuccess}
        isLoading={isLoading}
      />
    </div>
  );
};
