import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';
import { lodash } from 'meteor/stevezhu:lodash';

MethodHooks.after('addGame', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.result;

		let yourClubTeamId = Meteor.call('addTeam', gameId);
		let opponentTeamId = Meteor.call('addTeam', gameId);

		Meteor.call('addTeamsIdInsideGame', gameId, yourClubTeamId, opponentTeamId);

		return options.result;
	}
});

MethodHooks.after('correctionOnePointTeamOpponent', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const playerId = options.arguments[1];

		Meteor.call('correctionOnePoint', playerId);

		return options.result;
	}
});

MethodHooks.after('onePointTeamOpponent', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const playerId = options.arguments[1];

		Meteor.call('onePoint', playerId);

		return options.result;
	}
});

MethodHooks.after('correctionTwoPointsTeamOpponent', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const playerId = options.arguments[1];

		Meteor.call('correctionTwoPoints', playerId);

		return options.result;
	}
});

MethodHooks.after('twoPointsTeamOpponent', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const playerId = options.arguments[1];

		Meteor.call('twoPoints', playerId);

		return options.result;
	}
});

MethodHooks.after('correctionThreePointsTeamOpponent', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const playerId = options.arguments[1];

		Meteor.call('correctionThreePoints', playerId);

		return options.result;
	}
});

MethodHooks.after('threePointsTeamOpponent', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const playerId = options.arguments[1];

		Meteor.call('threePoints', playerId);

		return options.result;
	}
});
