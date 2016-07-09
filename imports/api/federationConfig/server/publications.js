import { Meteor } from 'meteor/meteor';

import { FederationConfig } from '../schema.js';

// Publication who send back everything, use it carrefully
Meteor.publish('federationConfig', () => {
	return FederationConfig.find();
});

// Publication who send back only the level of the categories
Meteor.publish('championshipLevel', () => {
	return FederationConfig.find({ def: 'level' });
});

// Publication who send back only the group of categories
Meteor.publish('championshipGroup', () => {
	return FederationConfig.find({ def: 'group' });
});
