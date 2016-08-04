import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';
import { lodash } from 'meteor/stevezhu:lodash';

MethodHooks.after('addAGame', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const data = {
			gameId: options.result,
			nbPlayersForYourClub: 12,
			nbPlayersForOpponent: 12
		};

		Meteor.call('playerInsert', data);

		return options.result;
	}
});
