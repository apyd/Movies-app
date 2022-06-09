import React from "react";
import { Logo } from "../../components/Logo/Logo";
import { Button } from "../../components/UI/Button/Button";
import {
  ButtonSize,
  ButtonType,
} from "../../components/UI/Button/Button.types";
import { SearchBar } from "../../components/UI/SearchBar/SearchBar";
import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__inner">
        <div className="hero__top-banner">
          <Logo />
          <Button variant={ButtonType.secondary} onClick={() => {}}>
            + ADD MOVIE
          </Button>
        </div>
        <section className="search">
          <h1 className="search__heading">FIND YOUR MOVIE</h1>
          <div className="search__wrapper">
            <SearchBar setQuery={() => {}} />
            <Button onClick={() => {}}>SEARCH</Button>
          </div>
        </section>
      </div>
    </div>
  );
};
