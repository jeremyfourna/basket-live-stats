import { Meteor } from 'meteor/meteor';

import { Clubs } from '../schema.js';

// Publication who send back everything, use it carrefully
Meteor.publish('clubs', function() {
	return Clubs.find({});
});

// Publication who send back only the name of the clubs
Meteor.publish('clubName', function() {
	return Clubs.find({}, {
		fields: {
			'name': 1
		}
	});
});

// Publication who send back the clubs that the user created
Meteor.publish('myClub', function(userId) {
	return Clubs.find({ createdBy: userId });
});
