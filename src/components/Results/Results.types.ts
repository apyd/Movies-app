export interface IResultsProps {
    numberOfResults: number,
    results: {
        id: number,
        title: string,
        genres: string[],
        production_year: number
        poster_url: string,
    }
}