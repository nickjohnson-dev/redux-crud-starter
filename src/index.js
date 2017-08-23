import h from 'react-hyperscript';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import app from './features/app';
import store from './store';
import './styles/index.scss';

const { App } = app.components;

render(
  h(Provider, {
    store,
  }, h(App)),
  document.querySelector('#root'),
);
