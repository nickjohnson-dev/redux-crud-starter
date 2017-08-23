import axios from 'axios';
import getOr from 'lodash/fp/getOr';
import { BASE_URL } from './constants';

export const getAll = dataType =>
  axios.get(`${BASE_URL}${dataType}`)
    .then(getOr([], 'data'))
    .catch(() => []);
