import { Movie } from "../../../store/api/movie.interface";

export interface IMovieContextMenuProps {
  movieId: number;
  toggleEditModal: () => void;
  toggleDeleteModal: () => void;
  onContextMenuClick: () => void;
}
