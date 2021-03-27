import { GET_SHOW } from '../../constants/actionsConsts';

const initial_state = {
  one_show: []
};

export const get_one_show_reducer = (state = initial_state, action) => {
  const actions = {
    [GET_SHOW]: () => ({
      ...state,
      one_show: action.value
    })
  };
  if (action.type in actions) {
    return actions[action.type](action);
  }
  return state;
};
