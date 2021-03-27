import * as action from '../constants/actionsConsts';
import * as api from '../Api/api';
import { TMovie } from '../Types/types';

export const set_movies = (value: TMovie[]) => ({
  type: action.SET_MOVIES,
  value
});
export const get_movie = (value: TMovie) => ({ type: action.GET_MOVIE, value });
export const del_movie = () => ({ type: action.DEL_MOVIE });
export const get_shows = (value) => ({ type: action.GET_SHOWS, value });
export const get_show = (value) => ({ type: action.GET_SHOW, value });

export const set_movies_thunk = () => async (dispatch) => {
  const movies = await api.get_all_movies();
  dispatch(set_movies(movies));
  dispatch(del_movie());
};

export const get_one_movie_thunk = (id) => async (dispatch) => {
  const movie = await api.get_one_movie(id);
  dispatch(get_movie(movie));
};

// export const get_all_shows_thunk = () => async (dispatch) => {
//   const shows = await api.get_all_shows();
//   dispatch(get_shows(shows));
// };

// export const get_one_show_thunk = (id) => async (dispatch) => {
//   const show = await api.get_one_show(id);
//   dispatch(get_show(show));
// };
