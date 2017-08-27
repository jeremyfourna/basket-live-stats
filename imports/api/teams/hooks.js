import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';
import R from 'ramda';

MethodHooks.after('Teams.addTeam', (options) => {
	if (R.prop('error', options)) {
		return;
	} else if (R.prop('result', options)) {
		const teamId = options.result;
		const gameId = R.head(R.prop('arguments', options));

		const listOfMethodToCall = [
			'Players.addPlayers',
			'Coachs.addCoachs'
		];

		R.forEach((method) => {
			Meteor.call(method, teamId, gameId);
		}, listOfMethodToCall);

		return R.prop('result', options);
	}
});

MethodHooks.after('Teams.onePointIn', (options) => {
	if (R.prop('error', options)) {
		return;
	} else if (R.prop('result', options)) {
		const gameId = R.head(R.prop('arguments', options));
		const teamId = R.nth(1, R.prop('arguments', options));
		const playerId = R.nth(2, R.prop('arguments', options));
		const evolScore = R.nth(3, R.prop('arguments', options));

		Meteor.call('Players.onePointIn', playerId); // Method to add stats on the player level
		Meteor.call('Games.newEvolScore', gameId, evolScore); // Method to update the score evolution for the game
		Meteor.call('Players.scoreEffect', gameId, teamId, 1); // Method to update the scoreEffect of the players in the game

		return R.prop('result', options);
	}
});

MethodHooks.after('Teams.correctOnePointIn', (options) => {
	if (R.prop('error', options)) {
		return;
	} else if (R.prop('result', options)) {
		const gameId = R.head(R.prop('arguments', options));
		const teamId = R.nth(1, R.prop('arguments', options));
		const playerId = R.nth(2, R.prop('arguments', options));

		Meteor.call('Players.correctOnePointIn', playerId); // Method to add stats on the player level
		Meteor.call('Games.correctNewEvolScore', gameId); // Method to update the score evolution for the game
		Meteor.call('Players.scoreEffect', gameId, teamId, -1); // Method to update the scoreEffect of the players in the game

		return R.prop('result', options);
	}
});

MethodHooks.after('Teams.twoPointsIn', (options) => {
	if (R.prop('error', options)) {
		return;
	} else if (R.prop('result', options)) {
		const gameId = R.head(R.prop('arguments', options));
		const teamId = R.nth(1, R.prop('arguments', options));
		const playerId = R.nth(2, R.prop('arguments', options));
		const evolScore = R.nth(3, R.prop('arguments', options));

		Meteor.call('Players.twoPointsIn', playerId); // Method to add stats on the player level
		Meteor.call('Games.newEvolScore', gameId, evolScore); // Method to update the score evolution for the game
		Meteor.call('Players.scoreEffect', gameId, teamId, 2); // Method to update the scoreEffect of the players in the game

		return R.prop('result', options);
	}
});

MethodHooks.after('Teams.correctTwoPointsIn', (options) => {
	if (R.prop('error', options)) {
		return;
	} else if (R.prop('result', options)) {
		const gameId = R.head(R.prop('arguments', options));
		const teamId = R.nth(1, R.prop('arguments', options));
		const playerId = R.nth(2, R.prop('arguments', options));

		Meteor.call('Players.correctTwoPointsIn', playerId); // Method to add stats on the player level
		Meteor.call('Games.correctNewEvolScore', gameId); // Method to update the score evolution for the game
		Meteor.call('Players.scoreEffect', gameId, teamId, -2); // Method to update the scoreEffect of the players in the game

		return R.prop('result', options);
	}
});

MethodHooks.after('Teams.threePointsIn', (options) => {
	if (R.prop('error', options)) {
		return;
	} else if (R.prop('result', options)) {
		const gameId = R.head(R.prop('arguments', options));
		const teamId = R.nth(1, R.prop('arguments', options));
		const playerId = R.nth(2, R.prop('arguments', options));
		const evolScore = R.nth(3, R.prop('arguments', options));

		Meteor.call('Players.threePointsIn', playerId); // Method to add stats on the player level
		Meteor.call('Games.newEvolScore', gameId, evolScore); // Method to update the score evolution for the game
		Meteor.call('Players.scoreEffect', gameId, teamId, 3); // Method to update the scoreEffect of the players in the game

		return R.prop('result', options);
	}
});

MethodHooks.after('Teams.correctThreePointsIn', (options) => {
	if (R.prop('error', options)) {
		return;
	} else if (R.prop('result', options)) {
		const gameId = R.head(R.prop('arguments', options));
		const teamId = R.nth(1, R.prop('arguments', options));
		const playerId = R.nth(2, R.prop('arguments', options));

		Meteor.call('Players.correctThreePointsIn', playerId); // Method to add stats on the player level
		Meteor.call('Games.correctNewEvolScore', gameId); // Method to update the score evolution for the game
		Meteor.call('Players.scoreEffect', gameId, teamId, -3); // Method to update the scoreEffect of the players in the game

		return R.prop('result', options);
	}
});