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

	name: {
		type: String,
		label: 'Club\'s name'
	},
	status: {
		type: String,
		label: 'Club\'s status',
		allowedValues: ['active', 'inactive', 'paymentProblem']
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
	homeJerseyColor: {
		type: String,
		label: 'Club\'s jersey color for home game'
	},
	awayJerseyColor: {
		type: String,
		label: 'Club\'s jersey color for away game'
	},
	createdBy: {
		type: String,
		label: 'User who created the club'
	},
	createdAt: {
		type: Date,
		label: 'When was created the club'
	},
	teams: {
		type: [String],
		label: 'Club\'s teams ID',
		optional: true
	}
});

Clubs.schema = clubSchema;
