import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearch } from '../../store/api/querySlice';
import { useModal } from '../../hooks/useModal';
import { AddMovie } from '../Modal/MovieForm/AddMovie/AddMovie';
import { SearchView } from './SearchView/SearchView';
import { MovieView } from './MovieView/MovieView';
import './Hero.scss';
import useMovie from '../../context/MovieContext/MovieContext';

export const Hero = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpened, toggleModal] = useModal();
  const { movie, setMovie } = useMovie();
  const dispatch = useDispatch();

  const onSearchChange = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(updateSearch(searchValue));
  };

  return (
    <div className={`hero ${!movie ? 'hero--search' : ''}`}>
      <div className="hero__inner">
        {!movie && (
          <SearchView
            value={searchValue}
            onChange={setSearchValue}
            onSearch={onSearchChange}
            toggleModal={toggleModal}
          />
        )}
        {movie && <MovieView onSearchIconPress={() => setMovie(null)} {...movie} />}
      </div>
      <AddMovie isOpened={isOpened} toggleModal={toggleModal} />
    </div>
  );
};
