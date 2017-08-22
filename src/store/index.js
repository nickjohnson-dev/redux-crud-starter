import { applyMiddleware, compose, createStore } from 'redux';
import location from '../features/location';
import reducer from './reducer';

const middlewareEnhancer = applyMiddleware(
  location.router.middleware,
);

export default createStore(reducer, compose(
  location.router.enhancer,
  middlewareEnhancer,
));
