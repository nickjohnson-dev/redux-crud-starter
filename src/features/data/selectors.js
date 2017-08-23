import getOr from 'lodash/fp/getOr';
import { NAME } from './constants';

export const getData =
  getOr([], `${NAME}.data`);
