import styled from '@emotion/styled'
import { variables } from '../../../shared/variables.styled'
import { colors } from '../../../shared/colors.styled'

export const MovieDetailsWrapper = styled.div`
  width: 100%;
`
export const MovieDetailsContent = styled.section`
  display: flex;
  align-items: center;
  gap: 0 3rem;
  flex: 1;
  padding: ${variables.sectionPadding};
  height: 100%;
`

export const MovieDetailsTopBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MovieDetailsHeader = styled.div`
  display: flex;
  align-items: center;
`

export const MovieDetailsHeading = styled.h1`
  font-weight: 400;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  padding-right: 1rem;
`

export const MovieDetailsDataWrapper = styled.div`
  flex: 1;
`

export const VoteAverage = styled.span`
  border: 1px solid ${colors.white};
  padding: 1rem;
  border-radius: 50%;
`
export const Genres = styled.span`
  padding: 0 1rem 0 0;
  display: block;
  padding: 0 0 1rem 0;
  color: ${colors.altGrey};
  font-size: 0.9rem;
`

export const Overview = styled.p`
  padding: 0 1rem 0 0;
  color: ${colors.altGrey};
`

export const TimeDetails = styled.span`
  padding: 0 1rem 0 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.pastelRed};
`

export const PosterWrapper = styled.div`
  height: 90%;

  @media screen and (max-width: 768px) {
    height: 60%;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`

export const Poster = styled.img`
  height: 100%;
`
