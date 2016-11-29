import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';

MethodHooks.after('onePointInForPlayer', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const teamId = options.arguments[1];
		const evolScore = options.arguments[3];

		Meteor.call('onePointIn', teamId);
		Meteor.call('newEvolScore', gameId, evolScore);

		return options.result;
	}
});

MethodHooks.after('correctOnePointInForPlayer', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const teamId = options.arguments[1];

		Meteor.call('correctOnePointIn', teamId);
		Meteor.call('correctNewEvolScore', gameId);

		return options.result;
	}
});

MethodHooks.after('twoPointsInForPlayer', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const teamId = options.arguments[1];
		const evolScore = options.arguments[3];

		Meteor.call('twoPointsIn', teamId);
		Meteor.call('newEvolScore', gameId, evolScore);

		return options.result;
	}
});

MethodHooks.after('correctTwoPointsInForPlayer', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const teamId = options.arguments[1];

		Meteor.call('correctTwoPointsIn', teamId);
		Meteor.call('correctNewEvolScore', gameId);

		return options.result;
	}
});

MethodHooks.after('threePointsInForPlayer', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const teamId = options.arguments[1];
		const evolScore = options.arguments[3];

		Meteor.call('threePointsIn', teamId);
		Meteor.call('newEvolScore', gameId, evolScore);

		return options.result;
	}
});

MethodHooks.after('correctThreePointsInForPlayer', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];
		const teamId = options.arguments[1];

		Meteor.call('correctThreePointsIn', teamId);
		Meteor.call('correctNewEvolScore', gameId);

		return options.result;
	}
});

MethodHooks.after('assistsInForPlayer', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('assists', teamId);

		return options.result;
	}
});

MethodHooks.after('correctAssistsInForPlayer', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('correctAssists', teamId);

		return options.result;
	}
});
