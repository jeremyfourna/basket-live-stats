import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { shootsSchema, foulsSchema } from '../schemas.js';

export const Teams = new Mongo.Collection('teams');

Teams.deny({
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

export const teamschema = new SimpleSchema({
	gameId: {
		type: String,
		label: 'Game id'
	},
	createdAt: {
		type: Date,
		label: 'State of the game'
	},
	score: {
		type: Number,
		label: 'Team Score',
		min: 0
	},
	evaluation: {
		type: Number,
		label: 'Global team evaluation'
	},
	points: {
		type: shootsSchema,
		label: 'All data for the shoots and points'
	},
	assists: {
		type: Number,
		label: 'Team assists',
		min: 0
	},
	offReb: {
		type: Number,
		label: 'Team offensive rebounds',
		min: 0
	},
	defReb: {
		type: Number,
		label: 'Team defensive rebounds',
		min: 0
	},
	fouls: {
		type: foulsSchema,
		label: 'All data for the fouls'
	},
	steals: {
		type: Number,
		label: 'Team steals',
		min: 0
	},
	blocks: {
		type: Number,
		label: 'Team blocks',
		min: 0
	},
	turnovers: {
		type: Number,
		label: 'Team turnovers',
		min: 0
	}
});

Teams.schema = teamschema;
