import { NAME } from './constants';

export const HOME_LOADED = `${NAME}/HOME_LOADED`;
export const PAGE_LOADED = `${NAME}/PAGE_LOADED`;

export const pageLoaded = page => ({
  type: PAGE_LOADED,
  payload: {
    page,
  },
});
