import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Coachs = new Mongo.Collection('coachs');

Coachs.deny({
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

export const coachSchema = new SimpleSchema({
	teamId: {
		type: String,
		label: 'team id'
	},
	firstName: {
		type: String,
		label: 'Coachs first name',
		optional: true
	},
	lastName: {
		type: String,
		label: 'Coachs last name',
		optional: true
	},
	primaryCoach: {
		type: Boolean,
		label: 'Primary coach or not'
	},
	techFouls: {
		type: Number,
		label: 'Coach tech fouls',
		min: 0,
		max: 2
	}
});

Coachs.schemas = coachSchema;
