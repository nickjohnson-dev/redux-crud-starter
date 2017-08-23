import { combineReducers } from 'redux';
import * as actions from './actions';

const data = (state = [], action) => {
  switch (action.type) {
    case actions.DATA_REQUEST_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  data,
});
