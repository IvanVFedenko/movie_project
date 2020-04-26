import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { get_one_movie_thunk } from '../Store/actions';
import { useHistory } from 'react-router-dom';
import { TMovie } from '../Types/types';
import { Typography } from '@material-ui/core';
import {
  MovieCardOne,
  StyledCardMediaOne,
  FlexContainer,
  InfoContainer,
  StyledTitleOne,
  StyledTitleTwo,
  StyledButtonBack,
} from '../Styles/styles';

const Movie = () => {
  let history = useHistory();
  let { movieId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_one_movie_thunk(movieId));
  }, []);
  const movie = useSelector(
    (state: { movie: { one_movie: TMovie } }) => state.movie.one_movie
  );

  let date = Date.parse(movie.dateOfRelease);
  let dRelease = new Date(date);
  let d = dRelease.getFullYear();

  return (
    <FlexContainer>
      <MovieCardOne>
        <StyledCardMediaOne src={movie.pictureLink} />
      </MovieCardOne>
      <InfoContainer>
        <StyledTitleOne>{movie.name}</StyledTitleOne>
        <StyledTitleTwo>(Release: {d})</StyledTitleTwo>
        <Typography variant="body1" align="justify">
          {movie.description}
        </Typography>
        <StyledButtonBack onClick={() => history.goBack()}>
          go back
        </StyledButtonBack>
      </InfoContainer>
    </FlexContainer>
  );
};

export default Movie;
