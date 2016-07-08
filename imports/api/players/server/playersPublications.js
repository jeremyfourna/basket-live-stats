import { Meteor } from 'meteor/meteor';

import { Players } from '../schema.js';

Meteor.publish('playersForAGame', (gameId) => {
	return Players.find({ gameId });
});
