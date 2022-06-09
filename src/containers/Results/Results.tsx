import React from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import "./Results.scss";

const NUMBER_OF_RESULTS = 39;
const RESULTS = [
  {
    id: "1",
    title: "Pulp Fiction",
    genres: ["Action & Adventure"],
    production_year: "2004",
    poster_url:
      "https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279",
  },
  {
    id: "2",
    title: "Bohemian Rhapsody",
    genres: ["Drama", "Biography", "Music"],
    production_year: "2003",
    poster_url:
      "https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279",
  },
  {
    id: "3",
    title: "Kill Bill",
    genres: ["Oscar winning movie"],
    production_year: "1994",
    poster_url:
      "https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279",
  },
  {
    id: "4",
    title: "Avengers: War of Inifinity",
    genres: ["Action & Adventure"],
    production_year: "2004",
    poster_url:
      "https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279",
  },
  {
    id: "5",
    title: "Inception",
    genres: ["Action & Adventure"],
    production_year: "2003",
    poster_url:
      "https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279",
  },
  {
    id: "6",
    title: "Reservoir dogs: ",
    genres: ["Oscar winning movie"],
    production_year: "1994",
    poster_url:
      "https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279",
  },
];

export const Results = () => {
  return (
    <div className="results">
      <span className="results-number">
        <span className="results-number--bold">{NUMBER_OF_RESULTS} </span>
        movies found
      </span>
      <ul className="movies">
        {RESULTS &&
          RESULTS.map(({ id, title, genres, production_year, poster_url }) => (
            <MovieCard
              id={id}
              title={title}
              genres={genres}
              productionYear={production_year}
              posterUrl={poster_url}
            />
          ))}
      </ul>
    </div>
  );
};
