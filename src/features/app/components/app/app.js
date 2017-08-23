import h from 'react-hyperscript';
import { DataContainer } from '../data/data-container';
import { TabsContainer } from '../tabs/tabs-container';
import './app.scss';

export const App = () =>
  h('.app', [
    h(TabsContainer),
    h(DataContainer),
  ]);
