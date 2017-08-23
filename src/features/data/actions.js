import { NAME } from './constants';

export const DATA_REQUEST_STARTED = `${NAME}/DATA_REQUEST_STARTED`;
export const DATA_REQUEST_SUCCEEDED = `${NAME}/DATA_REQUEST_SUCCEEDED`;

export const dataRequestStarted = () => ({
  type: DATA_REQUEST_STARTED,
});

export const dataRequestSucceeded = data => ({
  type: DATA_REQUEST_SUCCEEDED,
  payload: data,
});
