import getOr from 'lodash/fp/getOr';
import { NAME } from './constants';

export const getPage =
  getOr('', `${NAME}.payload.page`);

export const getType =
  getOr('', `${NAME}.type`);
