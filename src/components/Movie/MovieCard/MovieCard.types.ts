export interface IMovieCardProps {
    id: string,
    title: string,
    rating: string,
    poster_url: string,
    genres: string[] | string,
    release_year: string,
    runtime: string,
    description: string,
    toggleEditModal: any // FIX IT
    toggleDeleteModal: any // FIX IT
}