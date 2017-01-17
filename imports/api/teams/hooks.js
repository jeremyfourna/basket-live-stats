import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';

MethodHooks.after('Teams.addTeam', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.result;
		const gameId = options.arguments[0];

		Meteor.call('Players.addPlayers', teamId, gameId);
		Meteor.call('Coachs.addCoachs', teamId, gameId);

		return options.result;
	}
});

MethodHooks.after('Teams.onePointIn', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const playerId = options.arguments[2];
		const evolScore = options.arguments[3];

		Meteor.call('Players.onePointIn', playerId); // Method to add stats on the player level
		Meteor.call('Games.newEvolScore', gameId, evolScore); // Method to update the score evolution for the game

		return options.result;
	}
});

MethodHooks.after('Teams.correctOnePointIn', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const playerId = options.arguments[2];

		Meteor.call('Players.correctOnePointIn', playerId); // Method to add stats on the player level
		Meteor.call('Games.correctNewEvolScore', gameId); // Method to update the score evolution for the game

		return options.result;
	}
});

MethodHooks.after('Teams.twoPointsIn', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const playerId = options.arguments[2];
		const evolScore = options.arguments[3];

		Meteor.call('Players.twoPointsIn', playerId); // Method to add stats on the player level
		Meteor.call('Games.newEvolScore', gameId, evolScore); // Method to update the score evolution for the game

		return options.result;
	}
});

MethodHooks.after('Teams.correctTwoPointsIn', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const playerId = options.arguments[2];

		Meteor.call('Players.correctTwoPointsIn', playerId); // Method to add stats on the player level
		Meteor.call('Games.correctNewEvolScore', gameId); // Method to update the score evolution for the game

		return options.result;
	}
});
