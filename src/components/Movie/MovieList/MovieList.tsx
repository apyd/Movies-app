import React, { FC } from 'react'
import { MovieCard } from '../MovieCard/MovieCard'
import { IMovieListProps } from './MovieList.types'
import './MovieList.scss';


export const MovieList: FC<IMovieListProps> = props => {
  const moviesData = Object.values(props);
  return (
    <ul className="movies">
      {moviesData.map((movieData) => {
        return (
          <MovieCard key={movieData.id} {...movieData} />
        );
      })}
    </ul>
  )
}
