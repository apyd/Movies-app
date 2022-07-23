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
  const { heroMovie, setHeroMovie } = useMovie();
  const dispatch = useDispatch();

  const onSearchChange = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(updateSearch(searchValue));
  };

  return (
    <div className={`hero ${!heroMovie ? 'hero--search' : ''}`}>
      <div className="hero__inner">
        {!heroMovie && (
          <SearchView
            value={searchValue}
            onChange={setSearchValue}
            onSearch={onSearchChange}
            toggleModal={toggleModal}
          />
        )}
        {heroMovie && <MovieView onSearchIconPress={() => setHeroMovie(null)} {...heroMovie} />}
      </div>
      <AddMovie isOpened={isOpened} toggleModal={toggleModal} />
    </div>
  );
};
