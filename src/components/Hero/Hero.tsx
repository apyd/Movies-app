import React from "react";
import { useModal } from "../../hooks/useModal";
import { AddMovie } from "../Modal/MovieForm/AddMovie/AddMovie";
import { SearchView } from "./SearchView/SearchView";
import "./Hero.scss";
import { MovieView } from "./MovieView/MovieView";

export const Hero = () => {
  const [isOpened, toggleModal] = useModal();
  const data = {
    id: "1",
    title: "Pulp Fiction",
    rating: "8.9",
    genres: ["Action & Adventure", "Comedy"],
    release_year: "2004",
    runtime: "2h 31min",
    poster_url:
      "https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati dolore vero placeat explicabo, vitae quidem, esse, error itaque id quaerat voluptatem et unde cum. Quo maxime fugiat ex impedit asperiores.",
  };

  return (
    <div className="hero hero--search">
      <div className="hero__inner">
        {/* <SearchView toggleModal={toggleModal} /> */}
        <MovieView {...data} />
      </div>
      <AddMovie isOpened={isOpened} toggleModal={toggleModal} />
    </div>
  );
};
