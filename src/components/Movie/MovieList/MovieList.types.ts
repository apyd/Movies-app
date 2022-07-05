import { IMovieCardProps } from "../MovieCard/MovieCard.types";

export interface IMovieListProps extends Array<{
    id: string,
    title: string,
    poster_url: string,
    production_year: string,
    genres: string[] | string,
}> { }