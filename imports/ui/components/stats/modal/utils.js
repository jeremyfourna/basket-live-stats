import { Meteor } from 'meteor/meteor';
import R from 'ramda';
import $ from 'jquery';
import { errorHandlingInMethod } from '../../../../startup/client/lib/utils.js';

// savePoints2 :: (boolean -> object) -> IO
export function savePoints(isACancelAction, scope) {
  const p = R.prop(R.__, scope);

  return R.ifElse(
    R.equals(true),
    () => Meteor.call(
      p('correctionMethod'),
      p('gameId'),
      p('teamId'),
      p('playerId'),
      errorHandlingInMethod),
    () => {
      const evolScore = {
        gameIndex: p('evolutionLength'),
        scoreGap: R.add(p('scoreGap'), p('points'))
      };
      return Meteor.call(
        p('method'),
        p('gameId'),
        p('teamId'),
        p('playerId'),
        evolScore,
        errorHandlingInMethod
      );
    }
  )(isACancelAction);
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

export function isACancelAction(element) {
  return $(element).hasClass('cancelAction');
}

export function getDataFromElement(dataProp, element) {
  return $(element).data(dataProp);
}

export function setDataInsideElement(element, dataProp, value) {
  return $(element).data(dataProp, value);
}

export function setTextInsideElement(element, value) {
  return $(element).text(value);
}
