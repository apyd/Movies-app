import styled from '@emotion/styled';
import { variables } from '../../shared/variables.styled';
import { HeroContainerProps } from './Hero.types';
import bgImage from '../../assets/hero-bg.jpeg';

export const HeroContainer = styled.div<HeroContainerProps>`
  display: flex;
  height: clamp(200px, 45vh, 400px);
  background-size: cover;
  background-image: ${(props) =>
    props.movieId
      ? 'unset'
      : `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.6)), url(${bgImage.src})`};
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${variables.sectionMaxWidth};
  margin: ${variables.marginCenterVertically};
  padding: ${variables.sectionPadding};
`;
