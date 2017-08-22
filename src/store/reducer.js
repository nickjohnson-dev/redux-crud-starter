import { combineReducers } from 'redux';
import location from '../features/location';

export default combineReducers({
  [location.constants.NAME]: location.reducer,
});
