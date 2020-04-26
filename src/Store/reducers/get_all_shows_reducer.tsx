import { GET_SHOWS } from '../../constants/actionsConsts';

const initial_state = {
  all_shows: []
};

export const get_all_shows_reducer = (state = initial_state, action) => {
  const actions = {
    [GET_SHOWS]: () => ({
      ...state,
      all_shows: action.value
    })
  };
  if (action.type in actions) {
    return actions[action.type](action);
  }
  return state;
};
