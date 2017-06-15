import R from 'ramda';
import { errorHandlingInMethod } from '../../../../startup/client/lib/utils.js';

export function savePoints(element, modal, team, correctionMethod, method, points) {
	// Use this function with bind : savePoints.bind(this, ...)
	const gameId = this.gameData._id;
	const teamId = this.gameData[team];
	const playerId = $(modal).data('playerid');
	const isACancelAction = $(element).hasClass('cancelAction');

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
			gameIndex: R.length(R.path(['gameData', 'evolution'], this)),
			scoreGap: R.add(
				R.nth(1, R.last(R.path(['gameData', 'evolution'], this))),
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

export function saveAction(element, modal, team, correctionMethod, method) {
	const teamId = this.gameData[team];
	const playerId = $(modal).data('playerid');
	const isACancelAction = $(element).hasClass('cancelAction');

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
