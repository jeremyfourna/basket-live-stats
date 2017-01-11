import { Meteor } from 'meteor/meteor';

import { FederationConfig } from '../schema.js';

Meteor.publish('FederationConfig.allFederationConfig', () => {
	return FederationConfig.find();
});

Meteor.publish('FederationConfig.allLevel', () => {
	return FederationConfig.find({ def: 'level' });
});

// Publication who send back only the group of categories
Meteor.publish('FederationConfig.allGroup', () => {
	return FederationConfig.find({ def: 'group' });
});
