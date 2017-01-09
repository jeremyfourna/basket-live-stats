import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const FederationConfig = new Mongo.Collection('federationConfig');

FederationConfig.deny({
	insert() {
		return true;
	},
	update() {
		return true;
	},
	remove() {
		return true;
	}
});

export const federationConfigSchema = new SimpleSchema({
	def: {
		type: String,
		label: 'Type of config',
		allowedValues: ['region', 'department', 'level', 'group']
	},
	val: {
		type: String,
		label: 'Value for the def'
	}
});

FederationConfig.schemas = federationConfigSchema;
