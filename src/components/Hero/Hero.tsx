import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { useAddMovieMutation } from '../../store/api/apiSlice';
import { useModal } from '../../hooks/useModal';
import { AddMovie } from '../Modal/AddMovie/AddMovie';
import { SearchView } from './SearchView/SearchView';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { IHeroProps } from './Hero.types';
import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

export const Hero: FC<IHeroProps> = ({ movie }) => {
  const router = useRouter();
  const { movieId, ...params } = router.query;
  const { params: searchQuery, ...queryParams } = params;
  const [addMovie, { isLoading, isError, isSuccess, reset }] = useAddMovieMutation();
  const [AddMovieModal, toggleModal] = useModal('Add movie', AddMovie, reset);

  const [query, setQuery] = useState(searchQuery?.toString() || '');

  const onChange = (value: string) => {
    setQuery(value);
  };

  const onSearch = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    updateQueryParams();
  };

  const updateQueryParams = () => {
    // @ts-expect-error - ignore queryParams type as works as expected
    const updatedQueryParams = new URLSearchParams(queryParams).toString();
    router.push(`/search/${query}?${updatedQueryParams}`);
  };

  return (
    <div className={cx(styles.hero, { 'hero--search': !movieId })}>
      <div className={cx('hero__inner')}>
        {movieId ? (
          <MovieDetails onSearchIconPress={updateQueryParams} {...movie} />
        ) : (
          <SearchView
            toggleModal={toggleModal}
            value={query}
            onChange={onChange}
            onSearch={onSearch}
          />
        )}
      </div>
      <AddMovieModal
        onFormSubmit={addMovie}
        isError={isError}
        isSuccess={isSuccess}
        isLoading={isLoading}
      />
    </div>
  );
};
