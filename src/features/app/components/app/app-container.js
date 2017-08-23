import { connect } from 'react-redux';
import data from '../../../data';
import { App } from './app';

export const AppContainer = connect(state => ({
  data: data.selectors.getData(state),
}))(App);
