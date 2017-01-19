import { Meteor } from 'meteor/meteor';
import { MethodHooks } from 'meteor/doctorpangloss:method-hooks';

MethodHooks.after('Players.assist', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('Teams.assist', teamId); // Method to add stats on the team level

		return options.result;
	}
});

MethodHooks.after('Players.correctAssist', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('Teams.correctAssist', teamId); // Method to add stats on the team level

		return options.result;
	}
});

MethodHooks.after('Players.offReb', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('Teams.offReb', teamId); // Method to add stats on the team level

		return options.result;
	}
});

MethodHooks.after('Players.correctOffReb', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('Teams.correctOffReb', teamId); // Method to add stats on the team level

		return options.result;
	}
});

MethodHooks.after('Players.defReb', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('Teams.defReb', teamId); // Method to add stats on the team level

		return options.result;
	}
});

MethodHooks.after('Players.correctDefReb', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('Teams.correctDefReb', teamId); // Method to add stats on the team level

		return options.result;
	}
});

MethodHooks.after('Players.provOffFouls', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('Teams.provOffFouls', teamId); // Method to add stats on the team level

		return options.result;
	}
});

MethodHooks.after('Players.correctProvOffFoul', (options) => {
	if (options.error) {
		return;
	} else if (options.result) {
		const teamId = options.arguments[0];

		Meteor.call('Teams.correctProvOffFoul', teamId); // Method to add stats on the team level

		return options.result;
	}
});
