import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';

MethodHooks.after('Players.threePointsIn', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const teamId = options.arguments[1];
		const evolScore = options.arguments[3];

		Meteor.call('Teams.threePointsIn', teamId); // Method to add stats on the team level
		Meteor.call('Games.newEvolScore', gameId, evolScore); // Method to update the score evolution for the game

		return options.result;
	}
});

MethodHooks.after('Players.correctThreePointsIn', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const teamId = options.arguments[1];

		Meteor.call('Teams.correctThreePointsIn', teamId); // Method to add stats on the team level
		Meteor.call('Games.correctNewEvolScore', gameId); // Method to update the score evolution for the game

		return options.result;
	}
});

MethodHooks.after('Players.assistsIn', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('Teams.assists', teamId); // Method to add stats on the team level

		return options.result;
	}
});

MethodHooks.after('Players.correctAssistsIn', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('Teams.correctAssists', teamId); // Method to add stats on the team level

		return options.result;
	}
});
