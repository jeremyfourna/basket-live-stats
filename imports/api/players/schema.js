import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Players = new Mongo.Collection('players');

Players.deny({
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

export const PlayerGameTimeSchema = new SimpleSchema({
	minutes: {
		type: Number,
		label: 'Minutes played',
		min: 0,
		max: 60
	},
	secondes: {
		type: Number,
		label: 'Secondes played',
		min: 0,
		max: 60
	},
	way: {
		type: String,
		label: 'In or Out',
		allowedValues: ['in', 'out']
	},
	gameState: {
		type: String,
		label: 'State of the game',
		allowedValues: ['notStarted', 'q1Running', 'q1Ended', 'q2Running', 'halfTime', 'q3Running', 'q3Ended', 'q4Running', 'gameEnded', 'oT1', 'oT2', 'oT3', 'oT4', 'oT5']
	}
});

export const PlayerPointsSchema = new SimpleSchema({
	onePointIn: {
		type: Number,
		label: 'Player FT scored',
		min: 0
	},
	onePointOut: {
		type: Number,
		label: 'Player FT missed',
		min: 0
	},
	twoPointsIn: {
		type: Number,
		label: 'Player 2pt scored',
		min: 0
	},
	twoPointsOut: {
		type: Number,
		label: 'Player 2pt missed',
		min: 0
	},
	threePointsIn: {
		type: Number,
		label: 'Player 3pt scored',
		min: 0
	},
	threePointsOut: {
		type: Number,
		label: 'Player 3pt missed',
		min: 0
	},
	totalPoints: {
		type: Number,
		label: 'Player total points',
		min: 0
	}
});

export const PlayerReboundsSchema = new SimpleSchema({
	offReb: {
		type: Number,
		label: 'Player offensive rebounds',
		min: 0
	},
	defReb: {
		type: Number,
		label: 'Player defensive rebounds',
		min: 0
	}
});

export const PlayerProvFoulsSchema = new SimpleSchema({
	offFouls: {
		type: Number,
		label: 'Player offensive provoqued fouls',
		min: 0
	},
	defFouls: {
		type: Number,
		label: 'Player defensive provoqued fouls',
		min: 0
	}
});

export const PlayerFoulsSchema = new SimpleSchema({
	provFouls: {
		type: PlayerProvFoulsSchema
	},
	offFouls: {
		type: Number,
		label: 'Team offensive fouls',
		min: 0,
		max: 5
	},
	defFouls: {
		type: Number,
		label: 'Team defensive fouls',
		min: 0,
		max: 5
	},
	totalFouls: {
		type: Number,
		label: 'Team total fouls',
		min: 0,
		max: 5
	},
	foul1FT: {
		type: Number,
		label: 'Team 1 FT fouls',
		min: 0,
		max: 5
	},
	foul2FT: {
		type: Number,
		label: 'Team 2 FT fouls',
		min: 0,
		max: 5
	},
	foul3FT: {
		type: Number,
		label: 'Team 3 FT fouls',
		min: 0,
		max: 5
	},
	techFouls: {
		type: Number,
		label: 'Team technical fouls',
		min: 0,
		max: 2
	},
	antiSportFouls: {
		type: Number,
		label: 'Team anti sportive fouls',
		min: 0,
		max: 2
	},
	disqualifyingFouls: {
		type: Number,
		label: 'Team disqualifying fouls',
		min: 0,
		max: 1
	}
});

export const PlayerStatsSchema = new SimpleSchema({
	points: {
		type: PlayerPointsSchema
	},
	evaluation: {
		type: Number,
		label: 'Global Player evaluation'
	},
	assists: {
		type: Number,
		label: 'Player assists',
		min: 0
	},
	rebounds: {
		type: PlayerReboundsSchema
	},
	fouls: {
		type: PlayerFoulsSchema
	},
	steals: {
		type: Number,
		label: 'Player steals',
		min: 0
	},
	blocks: {
		type: Number,
		label: 'Player blocks',
		min: 0
	},
	turnovers: {
		type: Number,
		label: 'Player turnovers',
		min: 0
	}
});

export const PlayerSchema = new SimpleSchema({
	gameId: {
		type: String,
		label: 'Game id'
	},
	teamId: {
		type: String,
		label: 'team id'
	},
	firstName: {
		type: String,
		label: 'Player first name',
		optional: true
	},
	lastName: {
		type: String,
		label: 'Player last name',
		optional: true
	},
	jersey: {
		type: Number,
		label: 'Player jersey Number',
		min: 0,
		max: 99
	},
	inPlay: {
		type: Boolean,
		label: 'Player in field or not'
	},
	gameTime: {
		type: [PlayerGameTimeSchema],
		optional: true
	},
	stats: {
		type: PlayerStatsSchema
	}
});

Players.schema = PlayerSchema;
