import React from "react";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import querySlice from "../../store/api/querySlice";
import { querySelector } from "../../store/store";
import { updateSearch } from "../../store/api/querySlice";
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
  const { searchText } = useSelector(querySelector);
  const dispatch = useDispatch();
  const { heroMovie, setHeroMovie } = useMovie();

  const onSearchChange = (text: string) => {
    if (text === searchText) {
      return;
    }
    dispatch(updateSearch(text));
  };

  const cx = classNames.bind(styles);

  return (
    <div className={cx(styles.hero, { "hero--search": !heroMovie })}>
      <div className={cx("hero__inner")}>
        {heroMovie ? (
          <MovieView
            onSearchIconPress={() => setHeroMovie(null)}
            {...heroMovie}
          />
        ) : (
          <SearchView
            toggleModal={toggleModal}
            value={searchText}
            onSearchChange={onSearchChange}
          />
        )}
      </div>
      {/* @ts-ignore - FIX IT*/}
      <AddMovieModal onSubmit={addMovie} />
    </div>
  );
};
