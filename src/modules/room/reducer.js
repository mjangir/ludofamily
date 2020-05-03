import * as contants from './constants';

const initialState = {
  roomCode: '',
  error: null,
};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case contants.CREATE_ROOM_SUCCESS:
      newState = {...state, roomCode: action.payload, loading: false};
      break;
    case contants.CREATE_ROOM_FAILURE:
      newState = {
        ...state,
        error: action.payload,
        loading: false,
      };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
