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

MethodHooks.after('deleteGame', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];

		Meteor.call('deleteTeams', gameId);
		Meteor.call('deletePlayers', gameId);
		Meteor.call('deleteCoachs', gameId);

		return options.result;
	}
});
