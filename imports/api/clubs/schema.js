import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Clubs = new Mongo.Collection('clubs');

Clubs.deny({
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

Clubs.schema = new SimpleSchema({
	name: {
		type: String,
		label: 'Club\'s name'
	},
	region: {
		type: String,
		label: 'Club\'s region'
	},
	department: {
		type: String,
		label: 'Club\'s department'
	},
	zipCode: {
		type: String,
		label: 'Club\'s zip code'
	},
	city: {
		type: String,
		label: 'Club\'s city'
	},
	jerseyColor: {
		type: String,
		label: 'Club\'s jersey color'
	},
	createdBy: {
		type: String,
		label: 'User who created the club'
	},
	teams: {
		type: [Object],
		label: 'Club\'s teams',
		optional: true
	}
});
