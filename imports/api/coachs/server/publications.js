import { Meteor } from 'meteor/meteor';

import { Coachs } from '../schema.js';

Meteor.publish('coachsForAGame', (gameId) => {
	return Coachs.find({ gameId });
});
