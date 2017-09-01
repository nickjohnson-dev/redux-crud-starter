import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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

const composeEnhancers = composeWithDevTools({
  persist: true,
});

const store = createStore(reducer, composeEnhancers(
  location.router.enhancer,
  middlewareEnhancer,
));

sagaMiddleware.run(saga);

store.dispatch(shared.actions.initialized());

export default store;
