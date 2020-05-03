import gameService from '../../services/game';
import * as contants from './constants';

export const createRoom = (payload = {}) => async dispatch => {
  try {
    const roomCode = await gameService.createRoom(
      payload.playerName,
      payload.color,
    );
    dispatch({
      type: contants.CREATE_ROOM_SUCCESS,
      payload: roomCode,
    });
  } catch (error) {
    dispatch({
      type: contants.CREATE_ROOM_FAILURE,
      payload: error,
    });
  }
};
