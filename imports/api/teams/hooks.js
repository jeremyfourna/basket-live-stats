import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';

MethodHooks.after('xxxxx', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const dataForPlayers = {
			gameId: options.result,
			nbPlayersForYourClub: 12,
			nbPlayersForOpponent: 12
		};
		const dataForCoachs = {
			gameId: options.result,
			nbCoachsForYourClub: 2,
			nbCoachsForOpponent: 2
		};

		Meteor.call('playerInsert', dataForPlayers);
		Meteor.call('coachInsert', dataForCoachs);

		return options.result;
	}
});
