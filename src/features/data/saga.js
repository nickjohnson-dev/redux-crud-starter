import { takeEvery } from 'redux-saga';
import { call, put, select, spawn } from 'redux-saga/effects';
import location from '../location';
import shared from '../shared';
import * as actions from './actions';
import * as helpers from './helpers';

function* initialize() {
  yield spawn(loadData);
}

function* loadData() {
  const page = yield select(location.selectors.getPage);
  const data = yield call(helpers.getAll, page);

  yield put(actions.dataRequestSucceeded(data));
}

export default function* saga() {
  yield [
    takeEvery(shared.actions.INITIALIZED, initialize),
    takeEvery(location.actions.PAGE_LOADED, loadData),
  ];
}
