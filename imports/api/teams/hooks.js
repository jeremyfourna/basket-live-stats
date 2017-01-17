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
