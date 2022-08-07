
export interface IMovieContextMenuProps {
  movieId: number;
  toggleEditModal: () => void;
  toggleDeleteModal: () => void;
  onContextMenuClick: () => void;
}
