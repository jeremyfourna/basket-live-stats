import { Meteor } from 'meteor/meteor';

import { Players } from '../schema.js';

Meteor.publish('playersForAGame', (gameId) => {
	return Players.find({
		gameId
	}, {
		fields: {
			_id: 1,
			firstName: 1,
			lastName: 1,
			jersey: 1,
			inPlay: 1,
			gameId: 1,
			teamId: 1
		},
		sort: {
			jersey: 1
		}
	});
});
