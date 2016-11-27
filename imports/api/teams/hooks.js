import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';

MethodHooks.after('addTeam', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.result;
		const gameId = options.arguments[0];

		Meteor.call('addPlayers', teamId, gameId);
		Meteor.call('addCoachs', teamId, gameId);

		return options.result;
	}
});
