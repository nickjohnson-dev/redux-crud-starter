import { connect } from 'react-redux';
import location from '../../../location';
import { App } from './app';

export const AppContainer = connect(state => ({
  page: location.selectors.getType(state),
}))(App);
