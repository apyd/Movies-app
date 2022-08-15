import React, { FC } from 'react';
import { Logo } from '../../UI/Logo/Logo';
import { Button } from '../../UI/Button/Button';
import { Search } from '../../UI/Search/Search';
import { ButtonVariant } from '../../UI/Button/Button.consts';
import { ISearchViewProps } from './SearchView.types';
import {
  SearchHeading,
  SearchViewContent,
  SearchViewWrapper,
  TopBanner
} from './SearchView.styled';
import { LogoSize } from '../../UI/Logo/Logo.const';

export const SearchView: FC<ISearchViewProps> = ({ value, toggleModal, onChange, onSearch }) => {
  return (
    <SearchViewWrapper>
      <TopBanner>
        <Logo size={LogoSize.medium} />
        <Button id="openAddMovieModal" variant={ButtonVariant.secondary} onClick={toggleModal}>
          + ADD MOVIE
        </Button>
      </TopBanner>
      <SearchViewContent>
        <SearchHeading>FIND YOUR MOVIE</SearchHeading>
        <Search value={value} onChange={onChange} onSearch={onSearch} />
      </SearchViewContent>
    </SearchViewWrapper>
  );
};
