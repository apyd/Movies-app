export interface IMovieCardProps {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: string[];
  runtime: number;
  toggleEditModal: () => void;
  toggleDeleteModal: () => void;
  onContextMenuClick: (movieDetails: any) => void;
  onMovieCardClick: (movieDetails: any) => void;
}
