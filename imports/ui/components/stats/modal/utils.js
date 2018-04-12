import { Meteor } from 'meteor/meteor';
import R from 'ramda';
import $ from 'jquery';
import { errorHandlingInMethod } from '../../../../startup/client/lib/utils.js';

export function savePoints(isACancelAction, playerId, team, correctionMethod, method, points, scope) {
  const gameId = R.prop('_id', scope);
  const teamId = R.prop(team, scope);

  if (isACancelAction) {
    return Meteor.call(
      correctionMethod,
      gameId,
      teamId,
      playerId,
      errorHandlingInMethod
    );
  } else {
    const evolScore = {
      gameIndex: R.length(R.prop('evolution', scope)),
      scoreGap: R.add(
        R.nth(1, R.last(R.prop('evolution', scope))),
        points
      )
    };
    return Meteor.call(
      method,
      gameId,
      teamId,
      playerId,
      evolScore,
      errorHandlingInMethod
    );
  }
}

export function saveAction(isACancelAction, playerId, teamId, correctionMethod, method) {
  if (isACancelAction) {
    return Meteor.call(
      correctionMethod,
      teamId,
      playerId,
      errorHandlingInMethod
    );
  } else {
    return Meteor.call(
      method,
      teamId,
      playerId,
      errorHandlingInMethod
    );
  }
}

export function getDataFromElement(element, dataProp) {
  return $(element).data(dataProp);
}

export function setDataInsideElement(element, dataProp, value) {
  return $(element).data(dataProp, value);
}

export function setTextInsideElement(element, value) {
  return $(element).text(value);
}