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
