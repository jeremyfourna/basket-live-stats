import { Meteor } from 'meteor/meteor';

import { Teams } from '../schema.js';

Meteor.publish('Teams.teamsForAGame', (gameId) => {
	return Teams.find({
		gameId
	});
});
