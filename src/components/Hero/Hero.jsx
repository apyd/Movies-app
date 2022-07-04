import React from "react";
import classNames from "classnames/bind";
import { useAddMovieMutation } from "../../store/api/apiSlice";
import { useModal } from "../../hooks/useModal";
import useMovie from "../../context/MovieContext/MovieContext";
import { MovieForm } from "../Modal/MovieForm/MovieForm";
import { SearchView } from "./SearchView/SearchView";
import { MovieView } from "./MovieView/MovieView";
import styles from "./Hero.scss";

export const Hero = () => {
  const [addMovie] = useAddMovieMutation();
  const [AddMovieModal, toggleModal] = useModal("Add movie", MovieForm);
  const { heroMovie, setHeroMovie } = useMovie();
  const cx = classNames.bind(styles);

  return (
    <div className={cx(styles.hero, { 'hero--search': !heroMovie })}>
      <div className={cx('hero__inner')}>
        {heroMovie ? (
          <MovieView onSearchIconPress={() => setHeroMovie(null)} {...heroMovie} />
        ) : (
          <SearchView toggleModal={toggleModal} />
        )}
      </div>
      <AddMovieModal onSubmit={addMovie} />
    </div >
  );
};
