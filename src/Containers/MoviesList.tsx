import React, { useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';

import { useSelector, useDispatch } from 'react-redux';
import { set_movies_thunk } from '../Store/actions';
import ShownMovies from '../Components/ShownMovies';

import {
  PaperWrapper,
  StyledLink,
  StyledButton,
  StyledForm,
} from '../Styles/styles';

import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { TMovie } from '../Types/types';

const MoviesList = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set_movies_thunk());
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const movies = useSelector(
    (state: { movies_list: { all_movies: TMovie[] } }) =>
      state.movies_list.all_movies
  );

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = (): void => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const [inputedValue, setInputedValue] = useState<string>('');
  const [moviesToShow, setMoviesToShow] = useState<TMovie[]>([]);
  const [GeneredFilms, setGeneredFilms] = useState<TMovie[]>([]);

  useEffect(() => {
    setMoviesToShow(movies);
    setGeneredFilms(movies);
  }, [movies]);

  useEffect(() => {
    getFilteredMovies(inputedValue);
  }, [GeneredFilms]);

  const getFilteredMovies = (handleInputedValue: string): void => {
    setInputedValue(handleInputedValue);
    const filmsArray = GeneredFilms?.filter((movie) =>
      movie.name.toLowerCase().includes(handleInputedValue.trim())
    );
    setMoviesToShow(filmsArray);
  };

  const getGeners = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ): void => {
    const value = e ? e.target.value : 6;
    if (+value === 6) {
      setGeneredFilms(movies);
    } else {
      setGeneredFilms(
        movies.filter((f: { genre_id: number[] }) =>
          f.genre_id.includes(+value)
        )
      );
    }
  };

  return (
    <div>
      <StyledForm>
        <TextField
          style={{ width: '228px', margin: '4px 16px' }}
          id="standard-search"
          label="Search by name"
          type="search"
          value={inputedValue}
          onChange={(e) => getFilteredMovies(e.target.value.toLowerCase())}
        />

        <label htmlFor="all__input_sort">
          <FormControl style={{ width: '228px', margin: '4px 16px' }}>
            <InputLabel
              htmlFor="demo-controlled-open-select"
              style={{ marginLeft: 25 }}
            >
              Gengers
            </InputLabel>
            <Select onChange={(value) => getGeners(value)}>
              <MenuItem value="6">
                <em>Find by genres:</em>
              </MenuItem>
              <MenuItem value="0">ACTION</MenuItem>
              <MenuItem value="1">ADVENTURES</MenuItem>
              <MenuItem value="2">COMEDY</MenuItem>
              <MenuItem value="3">DRAMA</MenuItem>
              <MenuItem value="4">HORROR</MenuItem>
              <MenuItem value="5">WESTERNS</MenuItem>
              <MenuItem value="6">ALL</MenuItem>
            </Select>
          </FormControl>
        </label>
      </StyledForm>
      <PaperWrapper elevation={0}>
        {moviesToShow?.map((movie: TMovie) => (
          <div key={movie._id}>
            <StyledLink to={`/movies_list/${movie._id}`}>
              <ShownMovies moviePoster={movie.pictureLink} name={movie.name} />
            </StyledLink>
          </div>
        ))}

        <StyledButton
          variant="contained"
          color="secondary"
          onClick={() => scrollToTop()}
          style={window.scrollY < 300 ? { display: 'none' } : null}
        >
          Go to top
        </StyledButton>
      </PaperWrapper>
    </div>
  );
};

export default MoviesList;
