import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';

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
