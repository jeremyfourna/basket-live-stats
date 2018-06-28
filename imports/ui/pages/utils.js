import { path } from 'ramda';

export function getGameId(router) {
  return path(['params', '_id'], router);
}
