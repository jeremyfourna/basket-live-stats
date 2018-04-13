import R from 'ramda';

export function getGameId(router) {
  return R.path(['params', '_id'], router);
}
