import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import location from '../features/location';
import shared from '../features/shared';
import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(
  location.router.middleware,
  sagaMiddleware,
);

const store = createStore(reducer, compose(
  location.router.enhancer,
  middlewareEnhancer,
));

sagaMiddleware.run(saga);

store.dispatch(shared.actions.initialized());

export default store;
