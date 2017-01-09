import { Meteor } from 'meteor/meteor';

import { FederationConfig } from '../schema.js';

Meteor.publish('retrieveAllFederationConfig', () => {
	return FederationConfig.find();
});

Meteor.publish('retrieveAllLevel', () => {
	return FederationConfig.find({ def: 'level' });
});

// Publication who send back only the group of categories
Meteor.publish('retrieveAllGroup', () => {
	return FederationConfig.find({ def: 'group' });
});
