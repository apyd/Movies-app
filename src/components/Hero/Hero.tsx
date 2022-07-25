import React, { useCallback, useRef } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { searchTextSelector } from '../../store/store';
import { updateSearch } from '../../store/api/querySlice';
import { useAddMovieMutation } from '../../store/api/apiSlice';
import { useModal } from '../../hooks/useModal';
import useMovie from '../../context/MovieContext/MovieContext';
import { SearchView } from './SearchView/SearchView';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { AddMovie } from '../Modal/AddMovie/AddMovie';
import styles from './Hero.scss';

const cx = classNames.bind(styles);

export const Hero = () => {
  const [addMovie, { isLoading, isError, isSuccess, reset }] = useAddMovieMutation();

  const [AddMovieModal, toggleModal] = useModal('Add movie', AddMovie, reset);

  const searchText = useSelector(searchTextSelector);

  const dispatch = useDispatch();

  const { heroMovie, setHeroMovie } = useMovie();

  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchChange = useCallback((e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const searchValue = inputRef?.current?.value;
    if (searchValue === searchText) {
      return;
    }
    dispatch(updateSearch(searchValue));
  }, []);

  return (
    <div className={cx(styles.hero, { 'hero--search': !heroMovie })}>
      <div className={cx('hero__inner')}>
        {heroMovie ? (
          <MovieDetails onSearchIconPress={() => setHeroMovie(null)} {...heroMovie} />
        ) : (
          <SearchView toggleModal={toggleModal} inputRef={inputRef} onSearch={onSearchChange} />
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
