import React, { FC } from 'react';

import { MovieCard, StyledCardMedia, StyledTitle } from '../Styles/styles';

interface Movie {
  moviePoster: string;
  name: string;
}

const ShownMovies: FC<Movie> = (props) => {
  const { moviePoster, name } = props;

  return (
    <MovieCard>
      <StyledCardMedia src={moviePoster} />
      <StyledTitle>{name}</StyledTitle>
    </MovieCard>
  );
};

export default ShownMovies;
