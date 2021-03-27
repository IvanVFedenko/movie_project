import { GET_MOVIE, DEL_MOVIE } from '../../constants/actionsConsts';
import { TMovie, Action } from '../../Types/types';

const initial_state = {};

export const get_one_movie_reducer = (
  state = initial_state,
  action: Action
): TMovie | {} => {
  const actions = {
    [GET_MOVIE]: () => ({
      ...state,
      one_movie: action.value
    }),
    [DEL_MOVIE]: () => ({
      ...state,
      one_movie: initial_state
    })
  };
  if (action.type in actions) {
    return actions[action.type](action);
  }
  return state;
};
