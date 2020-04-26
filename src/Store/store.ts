import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { set_all_movies_reducer } from '../Store/reducers/set_all_movies_reducer';
import { get_one_movie_reducer } from '../Store/reducers/get_one_movie_reducer';
// import { get_all_shows_reducer } from '../Store/reducers/get_all_shows_reducer';
// import { get_one_show_reducer } from '../Store/reducers/get_one_show_reducer';

const rootReducer = combineReducers({
  movies_list: set_all_movies_reducer,
  movie: get_one_movie_reducer,
  // shows: get_all_shows_reducer,
  // show: get_one_show_reducer
});

export const movies = ({ movies_list }) => movies_list.all_movies;
// export const movie = ({ movie }) => movie.one_movie;
// export const shows = ({ shows }) => shows.all_shows;
// export const show = ({ show }) => show.one_show;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
