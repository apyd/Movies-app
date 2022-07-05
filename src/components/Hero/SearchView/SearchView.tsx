import React, { FC } from "react";
import { Logo } from "../../Logo/Logo";
import { Button } from "../../UI/Button/Button";
import { ButtonType } from "../../UI/Button/Button.consts";
import { Search } from "../../UI/Search/Search";
import "./SearchView.scss";
import { ISearchViewProps } from "./SearchView.types";

export const SearchView: FC<ISearchViewProps> = ({ toggleModal }) => {
  return (
    <>
      <div className="search-view__top-banner">
        <Logo />
        <Button variant={ButtonType.secondary} onClick={toggleModal}>
          + ADD MOVIE
        </Button>
      </div>
      <section className="search-view__content">
        <h1 className="search__heading">FIND YOUR MOVIE</h1>
        <Search setQuery={() => {}} onSearch={() => {}} />
      </section>
    </>
  );
};
