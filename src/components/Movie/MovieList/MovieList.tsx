import React, { FC, memo, useMemo } from 'react';
import { useRouter } from 'next/router';
import {
  useDeleteMovieByIdMutation,
  useUpdateMovieByIdMutation
} from '../../../store/api/apiSlice';
import { useModal } from '../../../hooks/useModal';
import { EditMovie } from '../../Modal/EditMovie/EditMovie';
import { MovieCard } from '../MovieCard/MovieCard';
import { DeleteMovie } from '../../Modal/DeleteMovie/DeleteMovie';
import { Movie } from '../../../types/movie.interface';
import { IMovieListProps } from './MovieList.types';
import useMovie from '../../../context/MovieContext/MovieContext';
import { MovieItem, Movies } from './MovieList.styled';

export const MovieList: FC<IMovieListProps> = memo(({ movies = [] }) => {
  const router = useRouter();
  const { params: searchQuery, ...queryParams } = router.query;
  const { movieId } = queryParams;
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

  const { setHeroMovie, selectedMovie, setSelectedMovie, setOpenedMovieMenuId } = useMovie();

  const onMovieCardClick = (movieDetails: Movie) => {
    const updatedQueryParams = new URLSearchParams({
      ...queryParams,
      movieId: movieDetails?.id.toString()
    }).toString();
    searchQuery?.toString()
      ? router.push(`/search/${searchQuery}?${updatedQueryParams}`)
      : router.push(`/search/?${updatedQueryParams}`);
    setHeroMovie(movieDetails);
  };

  const onContextMenuClick = (movieDetails: Movie) => {
    setOpenedMovieMenuId(movieDetails?.id);
    setSelectedMovie(movieDetails);
  };

  const moviesList = useMemo(
    () =>
      movies.length > 0
        ? movies.map((movie: Movie) => {
            return (
              <MovieItem key={movie.id}>
                <MovieCard
                  {...movie}
                  toggleEditModal={toggleEditModal}
                  toggleDeleteModal={toggleDeleteModal}
                  onMovieCardClick={onMovieCardClick}
                  onContextMenuClick={onContextMenuClick}
                />
              </MovieItem>
            );
          })
        : null,
    [movies]
  );

  return (
    <>
      <EditModal
        onFormSubmit={updateMovie}
        formData={selectedMovie}
        isError={isUpdateError}
        isSuccess={isUpdateSuccess}
        isLoading={isUpdateLoading}
      />
      <DeleteModal
        onSubmit={deleteMovie}
        movieId={movieId}
        isError={isDeleteError}
        isSuccess={isDeleteSuccess}
        isLoading={isDeleteLoading}
      />
      <Movies id="resultsList">{moviesList}</Movies>
    </>
  );
});
