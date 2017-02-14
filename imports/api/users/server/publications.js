import { Meteor } from 'meteor/meteor';

Meteor.publish('aUser', (userId) => {
	return Meteor.users.find({ _id: userId });
});
