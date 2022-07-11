import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useAddMovieMutation } from '../../store/api/apiSlice';
import { useModal } from '../../hooks/useModal';
import useMovie from '../../context/MovieContext/MovieContext';
import { MovieForm } from '../Modal/MovieForm/MovieForm';
import { SearchView } from './SearchView/SearchView';
import { MovieView } from './MovieView/MovieView';
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import styles from './Hero.scss';

export interface CustomizedState {
  searchQuery: string | null;
  movieId: number | null;
  genre: string | null;
  sort: string | null;
}

export const Hero = () => {
  const [addMovie] = useAddMovieMutation();
  const [AddMovieModal, toggleModal] = useModal('Add movie', MovieForm);
  const { heroMovie, setHeroMovie } = useMovie();
  const location = useLocation();
  const state = location.state as CustomizedState;
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
          <MovieView onSearchIconPress={switchToSearchView} {...heroMovie} />
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
