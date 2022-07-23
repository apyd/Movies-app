import React, { FC, useState } from 'react';
import { useModal } from '../../../hooks/useModal';
import { MovieCard } from '../MovieCard/MovieCard';
import { EditMovie } from '../../Modal/MovieForm/EditMovie/EditMovie';
import { DeleteMovie } from '../../Modal/Confirmation/DeleteMovie/DeleteMovie';
import { IMovieListProps } from './MovieList.types';
import './MovieList.scss';
import useMovie from '../../../context/MovieContext/MovieContext';

export const MovieList: FC<IMovieListProps> = (props) => {
  const [movieId, setMovieId] = useState<number | null>(null);
  const { heroMovie, setHeroMovie } = useMovie();
  const [isDeleteModalOpened, toggleDeleteModal] = useModal();
  const [isEditModalOpened, toggleEditModal] = useModal();

  const onMovieCardClick = (id: number, movieDetails: any) => {
    setMovieId(id);
    setHeroMovie(movieDetails);
  };

  return (
    <>
      <EditMovie toggleModal={toggleEditModal} isOpened={isEditModalOpened} />
      <DeleteMovie toggleModal={toggleDeleteModal} isOpened={isDeleteModalOpened} />
      <ul className="movies">
        {props.data.map((movieData) => {
          return (
            <MovieCard
              key={movieData.id}
              {...movieData}
              toggleEditModal={toggleEditModal}
              toggleDeleteModal={toggleDeleteModal}
              onMovieCardClick={onMovieCardClick}
            />
          );
        })}
      </ul>
    </>
  );
};
