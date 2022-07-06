import React, { FC } from "react";
import classNames from "classnames/bind";
import { Logo } from "../../Logo/Logo";
import { Button } from "../../UI/Button/Button";
import { Search } from "../../UI/Search/Search";
import { ButtonType } from "../../UI/Button/Button.consts";
import { ISearchViewProps } from "./SearchView.types";
import styles from "./SearchView.scss";

export const SearchView: FC<ISearchViewProps> = ({
  toggleModal,
  value,
  onChange,
  onSearch,
}) => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("search-view")}>
      <div className={cx("search-view__top-banner")}>
        <Logo />
        <Button variant={ButtonType.secondary} onClick={toggleModal}>
          + ADD MOVIE
        </Button>
      </div>
      <section className={cx("search-view__content")}>
        <h1 className={cx("search__heading")}>FIND YOUR MOVIE</h1>
        <Search value={value} onChange={onChange} onSearch={onSearch} />
      </section>
    </div>
  );
};
