export interface IResultsProps {
    numberOfResults: number,
    results: {
        id: string,
        title: string,
        rating: string,
        poster_url: string,
        genres: string[] | string,
        release_year: string,
        runtime: string,
        description: string,
    }
}