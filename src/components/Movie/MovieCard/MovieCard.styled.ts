import styled from '@emotion/styled';
import { colors } from '../../../shared/colors.styled';

export const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardPosterWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CardPoster = styled.img`
  height: auto;
  width: 100%;
  object-fit: contain;
`;

export const CardDetails = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;

export const MovieTitle = styled.h3`
  font-weight: bold;
  white-space: nowrap;
`;

export const MovieProductionYear = styled.span`
  display: inline-block;
  padding: 0.2rem 0.4rem;
  border: 1px solid ${colors.lightGrey};
`;

export const MovieGenres = styled.span`
  color: ${colors.altGrey};
  font-size: 0.9rem;
`;

export const MovieTitleWrapper = styled.div`
  max-width: 55%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
