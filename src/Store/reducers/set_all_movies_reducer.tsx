import { SET_MOVIES } from '../../constants/actionsConsts';
import { TMovie, Action } from '../../Types/types';

const initial_state = [];

export const set_all_movies_reducer = (
  state = initial_state,
  action: Action
): TMovie[] => {
  const actions = {
    [SET_MOVIES]: () => ({
      all_movies: action.value,
    }),
  };
  if (action.type in actions) {
    return actions[action.type](action);
  }
  return state;
};
