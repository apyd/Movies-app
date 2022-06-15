import React from "react";
import { Logo } from "../../components/Logo/Logo";
import { Button } from "../../components/UI/Button/Button";
import { ButtonType } from "../../components/UI/Button/Button.consts";
import { useModal } from "../../hooks/useModal";
import { AddMovie } from "../Modal/MovieForm/AddMovie/AddMovie";
import { Search } from "../Search/Search";
import "./Hero.scss";

export const Hero = () => {
  const [isOpened, toggleModal] = useModal();

  return (
    <div className="hero">
      <div className="hero__inner">
        <div className="hero__top-banner">
          <Logo />
          <Button variant={ButtonType.secondary} onClick={toggleModal}>
            + ADD MOVIE
          </Button>
        </div>
        <section className="search__wrapper">
          <h1 className="search__heading">FIND YOUR MOVIE</h1>
          <Search setQuery={() => {}} onSearch={() => {}} />
        </section>
      </div>
      <AddMovie isOpened={isOpened} toggleModal={toggleModal} />
    </div>
  );
};
