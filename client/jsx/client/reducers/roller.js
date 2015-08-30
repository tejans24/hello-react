import { ROLL } from '../constants/ActionTypes';

const initialState = {
  num: Math.ceil(Math.random() * 6)
};

export default function roller(state = initialState, action) {
  switch (action.type) {
    case ROLL:
      state.num = Math.ceil(Math.random() * 6);
      return state;

    default:
      return state;
  }
}
