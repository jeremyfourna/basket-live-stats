import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';

MethodHooks.after('addGame', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.result;

		Meteor.call('addPlayers', teamId);

		return options.result;
	}
});
