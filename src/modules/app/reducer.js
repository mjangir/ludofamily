import {INCREMENT_LOADER} from './constants';

const intialState = {
  count: 0,
};

export default function reducer(state = intialState, action) {
  let newState;
  switch (action.type) {
    case INCREMENT_LOADER:
      newState = {count: state.count + 1};
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
