export interface IMovieDetails {
    id: string;
    title: string;
    rating: string;
    poster_url: string;
    genres: string[] | string,
    release_year: string;
    runtime: string;
    description: string;
}

export interface IMovieContextType {
    movie: null | IMovieDetails;
    setMovie: (movie: IMovieDetails | null) => void;
}