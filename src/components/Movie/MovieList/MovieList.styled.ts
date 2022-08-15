import styled from '@emotion/styled';

export const Movies = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-template-columns: repeat(1fr);
  grid-gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MovieItem = styled.li`
  height: 100%;
`;
