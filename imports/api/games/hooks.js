import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';
import { lodash } from 'meteor/stevezhu:lodash';

MethodHooks.after('Games.addGame', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.result;

		const yourClubTeamId = Meteor.call('Teams.addTeam', gameId);
		const opponentTeamId = Meteor.call('Teams.addTeam', gameId);

		Meteor.call('Games.addTeamsId', gameId, yourClubTeamId, opponentTeamId);

		return options.result;
	}
});

MethodHooks.after('Games.deleteGame', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const gameId = options.arguments[0];

		Meteor.call('Teams.deleteTeams', gameId);
		Meteor.call('Players.deletePlayers', gameId);
		Meteor.call('Coachs.deleteCoachs', gameId);

		return options.result;
	}
});
