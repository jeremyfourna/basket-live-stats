import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { FederationConfig } from './schema.js';

Meteor.methods({
	'FederationConfig.addARegion': (val) => {
		// Check method params
		check(val, String);
		// If OK the code continue
		return FederationConfig.insert({
			val,
			def: 'region'
		});
	},
	'FederationConfig.addADepartment': (val) => {
		// Check method params
		check(val, String);
		// If OK the code continue
		return FederationConfig.insert({
			val,
			def: 'department'
		});
	},
	'FederationConfig.addALevel': (val) => {
		// Check method params
		check(val, String);
		// If OK the code continue

		return FederationConfig.insert({
			val,
			def: 'level'
		});
	},
	'FederationConfig.addAGroup': (val) => {
		// Check method params
		check(val, String);
		// If OK the code continue
		return FederationConfig.insert({
			val,
			def: 'group'
		});
	}
});
