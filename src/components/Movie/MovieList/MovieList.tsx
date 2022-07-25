import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import {
  useDeleteMovieByIdMutation,
  useUpdateMovieByIdMutation
} from '../../../store/api/apiSlice';
import useMovie from '../../../context/MovieContext/MovieContext';
import { useModal } from '../../../hooks/useModal';
import { EditMovie } from '../../Modal/EditMovie/EditMovie';
import { MovieCard } from '../MovieCard/MovieCard';
import { DeleteMovie } from '../../Modal/DeleteMovie/DeleteMovie';
import { Movie } from '../../../store/api/movie.interface';
import { IMovieListProps } from './MovieList.types';
import styles from './MovieList.scss';

const cx = classNames.bind(styles);

export const MovieList: FC<IMovieListProps> = ({ movies }) => {
  const [movieId, setMovieId] = useState(null);
  const [updateMovie, updateRequestStatus] = useUpdateMovieByIdMutation();
  const [deleteMovie, deleteRequestStatus] = useDeleteMovieByIdMutation();

  const {
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
    isLoading: isUpdateLoading,
    reset: resetUpdate
  } = updateRequestStatus;
  const {
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
    isLoading: isDeleteLoading,
    reset: resetDelete
  } = deleteRequestStatus;

  const [EditModal, toggleEditModal] = useModal('Edit movie', EditMovie, resetUpdate);
  const [DeleteModal, toggleDeleteModal] = useModal('Delete movie', DeleteMovie, resetDelete);

  const { setHeroMovie, selectedMovie, setSelectedMovie } = useMovie();

  const onMovieCardClick = useCallback((movieDetails: Movie) => {
    setHeroMovie(movieDetails);
  }, []);

  const onContextMenuClick = useCallback((movieDetails: Movie) => {
    setSelectedMovie(movieDetails);
    setMovieId(movieDetails.id);
  }, []);

  const moviesList = useMemo(
    () =>
      movies.map((movie: any) => {
        return (
          <li key={movie.id}>
            <MovieCard
              key={movie.id}
              {...movie}
              toggleEditModal={toggleEditModal}
              toggleDeleteModal={toggleDeleteModal}
              onMovieCardClick={onMovieCardClick}
              onContextMenuClick={onContextMenuClick}
            />
          </li>
        );
      }),
    [movies]
  );

  return (
    <>
      {/* @ts-ignore - FIX IT*/}
      <EditModal
        onFormSubmit={updateMovie}
        formData={selectedMovie}
        isError={isUpdateError}
        isSuccess={isUpdateSuccess}
        isLoading={isUpdateLoading}
      />
      {/* @ts-ignore FIX-IT */}
      <DeleteModal
        onSubmit={deleteMovie}
        movieId={movieId}
        isError={isDeleteError}
        isSuccess={isDeleteSuccess}
        isLoading={isDeleteLoading}
      />
      <ul className={cx('movies')}>{moviesList}</ul>
    </>
  );
};
