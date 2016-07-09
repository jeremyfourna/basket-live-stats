import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { FederationConfig } from './schema.js';

Meteor.methods({
	addARegion(data) {
		let methodSchema = new SimpleSchema({
			value: { type: String }
		});
		check(data, methodSchema);

		return FederationConfig.insert({
			def: 'region',
			val: data.value
		});
	},
	addADepartment(data) {
		let methodSchema = new SimpleSchema({
			value: { type: String }
		});
		check(data, methodSchema);

		return FederationConfig.insert({
			def: 'department',
			val: data.value
		});
	},
	addALevel(data) {
		let methodSchema = new SimpleSchema({
			value: { type: String }
		});
		check(data, methodSchema);

		return FederationConfig.insert({
			def: 'level',
			val: data.value
		});
	},
	addAGroup(data) {
		let methodSchema = new SimpleSchema({
			value: { type: String }
		});
		check(data, methodSchema);

		return FederationConfig.insert({
			def: 'group',
			val: data.value
		});
	}
});
