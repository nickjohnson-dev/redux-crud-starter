import { connect } from 'react-redux';
import data from '../../../data';
import { Data } from './data';

export const DataContainer = connect(state => ({
  data: data.selectors.getData(state),
}))(Data);
