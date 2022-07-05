import React from "react";
import { useModal } from "../../hooks/useModal";
import { AddMovie } from "../Modal/MovieForm/AddMovie/AddMovie";
import { SearchView } from "./SearchView/SearchView";
import { MovieView } from "./MovieView/MovieView";
import "./Hero.scss";
import useMovie from "../../context/MovieContext/MovieContext";

export const Hero = () => {
  const [isOpened, toggleModal] = useModal();
  const { movie, setMovie } = useMovie();

  return (
    <div className={`hero ${!movie ? "hero--search" : ""}`}>
      <div className="hero__inner">
        {!movie && <SearchView toggleModal={toggleModal} />}
        {movie && (
          <MovieView onSearchIconPress={() => setMovie(null)} {...movie} />
        )}
      </div>
      <AddMovie isOpened={isOpened} toggleModal={toggleModal} />
    </div>
  );
};
