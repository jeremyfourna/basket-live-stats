import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

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

export const shootsSchema = new SimpleSchema({
	onePointIn: {
		type: Number,
		label: 'Team FT scored',
		min: 0
	},
	onePointOut: {
		type: Number,
		label: 'Team FT missed',
		min: 0
	},
	twoPointsIn: {
		type: Number,
		label: 'Team 2pt scored',
		min: 0
	},
	twoPointsOut: {
		type: Number,
		label: 'Team 2pt missed',
		min: 0
	},
	threePointsIn: {
		type: Number,
		label: 'Team 3pt scored',
		min: 0
	},
	threePointsOut: {
		type: Number,
		label: 'Team 3pt missed',
		min: 0
	}
});

export const foulsSchema = new SimpleSchema({
	provOffFouls: {
		type: Number,
		label: 'Team offensive provoqued fouls',
		min: 0
	},
	provDefFouls: {
		type: Number,
		label: 'Team defensive provoqued fouls',
		min: 0
	},
	offFouls: {
		type: Number,
		label: 'Team offensive fouls',
		min: 0
	},
	defFouls: {
		type: Number,
		label: 'Team defensive fouls',
		min: 0
	},
	totalFouls: {
		type: Number,
		label: 'Team total fouls',
		min: 0
	},
	foul1FT: {
		type: Number,
		label: 'Team 1 FT fouls',
		min: 0
	},
	foul2FT: {
		type: Number,
		label: 'Team 2 FT fouls',
		min: 0
	},
	foul3FT: {
		type: Number,
		label: 'Team 3 FT fouls',
		min: 0
	},
	techFouls: {
		type: Number,
		label: 'Team technical fouls',
		min: 0
	},
	antiSportFouls: {
		type: Number,
		label: 'Team anti sportive fouls',
		min: 0
	},
	disqualifyingFouls: {
		type: Number,
		label: 'Team disqualifying fouls',
		min: 0
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
