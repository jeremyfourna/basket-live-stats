import { Meteor } from 'meteor/meteor';

import { Clubs } from '../schema.js';

Meteor.publish('retrieveAllClubsData', () => {
	return Clubs.find({});
});

Meteor.publish('retrieveAllClubsName', () => {
	return Clubs.find({}, {
		fields: {
			'name': 1
		}
	});
});

Meteor.publish('clubsCreatedByUserId', (userId) => {
	return Clubs.find({ createdBy: userId });
});
