import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { FederationConfig } from './schema.js';

Meteor.methods({
	addARegion(val) {
		// Check method params
		check(val, String);
		// If OK the code continue
		return FederationConfig.insert({
			val,
			def: 'region'
		});
	},
	addADepartment(val) {
		// Check method params
		check(val, String);
		// If OK the code continue
		return FederationConfig.insert({
			val,
			def: 'department'
		});
	},
	addALevel(val) {
		// Check method params
		check(val, String);
		// If OK the code continue

		return FederationConfig.insert({
			val,
			def: 'level'
		});
	},
	addAGroup(val) {
		// Check method params
		check(val, String);
		// If OK the code continue
		return FederationConfig.insert({
			val,
			def: 'group'
		});
	}
});
