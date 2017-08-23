import { combineReducers } from 'redux';
import data from '../features/data';
import location from '../features/location';

export default combineReducers({
  [data.constants.NAME]: data.reducer,
  [location.constants.NAME]: location.reducer,
});
