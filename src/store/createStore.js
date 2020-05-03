import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {app, room} from '../modules';

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    [app.NAME]: app.reducer,
    [room.NAME]: room.reducer,
  });

  return createStore(rootReducer, data, middleware);
};
