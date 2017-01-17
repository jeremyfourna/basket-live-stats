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
	gameId: {
		type: String,
		label: 'Coach\'s game id'
	},
	teamId: {
		type: String,
		label: 'Coach\'s team id'
	},
	clubId: {
		type: String,
		label: 'Coach\'s club id',
		optional: true
	},
	firstName: {
		type: String,
		label: 'Coach\'s first name',
		optional: true
	},
	lastName: {
		type: String,
		label: 'Coach\'s last name',
		optional: true
	},
	primaryCoach: {
		type: Boolean,
		label: 'Primary coach or not'
	},
	techFouls: {
		type: Number,
		label: 'Coach\'s tech fouls',
		min: 0,
		max: 2
	}
});

Coachs.schemas = coachSchema;
