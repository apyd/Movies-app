import React, { FC, memo, useState } from 'react';
import classNames from 'classnames/bind';
import {
  useDeleteMovieByIdMutation,
  useUpdateMovieByIdMutation
} from '../../../store/api/apiSlice';
import useMovie from '../../../context/MovieContext/MovieContext';
import { useModal } from '../../../hooks/useModal';
import { MovieForm } from '../../Modal/MovieForm/MovieForm';
import { MovieCard } from '../MovieCard/MovieCard';
import { DeleteMovie } from '../../Modal/DeleteMovie/DeleteMovie';
import { Movie } from '../../../store/api/apiTypes';
import { IMovieListProps } from './MovieList.types';
import styles from './MovieList.scss';

const MovieList: FC<IMovieListProps> = (props) => {
  const [movieId, setMovieId] = useState(null);
  const [EditModal, toggleEditModal] = useModal('Edit movie', MovieForm);
  const [DeleteModal, toggleDeleteModal] = useModal('Delete movie', DeleteMovie);
  const [updateMovie] = useUpdateMovieByIdMutation();
  const [deleteMovie] = useDeleteMovieByIdMutation();

  const { setHeroMovie } = useMovie();

  const onMovieCardClick = (id: number, movieDetails: Movie) => {
    setMovieId(id);
    setHeroMovie(movieDetails);
  };

  const cx = classNames.bind(styles);

  const onMovieCardClick = (id: number, movieDetails: any) => {
    setMovieId(id);
    setHeroMovie(movieDetails);
  };

  return (
    <>
      {/* @ts-ignore - FIX IT*/}
      <EditModal onSubmit={updateMovie} formData={[]} />
      {/* @ts-ignore FIX-IT */}
      <DeleteModal onSubmit={deleteMovie} movieId={movieId} />
      <ul className={cx('movies')}>
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

export const MemoizedMovieList = memo(MovieList);
