import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Games = new Mongo.Collection('games');

Games.deny({
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


let TeamShootsSchema = new SimpleSchema({
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

let TeamReboundsSchema = new SimpleSchema({
	offReb: {
		type: Number,
		label: 'Team offensive rebounds',
		min: 0
	},
	defReb: {
		type: Number,
		label: 'Team defensive rebounds',
		min: 0
	}
});

let TeamProvFoulsSchema = new SimpleSchema({
	offFouls: {
		type: Number,
		label: 'Team offensive provoqued fouls',
		min: 0
	},
	defFouls: {
		type: Number,
		label: 'Team defensive provoqued fouls',
		min: 0
	}
});

let TeamFoulsSchema = new SimpleSchema({
	provFouls: {
		type: TeamProvFoulsSchema
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

let TeamStatsSchema = new SimpleSchema({
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
		type: TeamShootsSchema
	},
	assists: {
		type: Number,
		label: 'Team assists',
		min: 0
	},
	rebounds: {
		type: TeamReboundsSchema
	},
	fouls: {
		type: TeamFoulsSchema
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

let GameStatsSchema = new SimpleSchema({
	yourClub: {
		type: TeamStatsSchema
	},
	opponent: {
		type: TeamStatsSchema
	},
	evolution: {
		type: [
			[Number, Number]
		],
		label: 'Game score evolution'
	}
});

let GameInfosSchema = new SimpleSchema({
	yourClub: {
		type: String,
		label: 'Your club name'
	},
	opponent: {
		type: String,
		label: 'Opponent club name'
	},
	level: {
		type: String,
		label: 'Game level',
		optional: true
	},
	group: {
		type: String,
		label: 'Group of the both teams',
		optional: true
	}
});

Games.schema = new SimpleSchema({
	userId: {
		type: String,
		label: 'User id'
	},
	createdAt: {
		type: String,
		label: 'State of the game'
	},
	gameState: {
		type: String,
		label: 'State of the game',
		allowedValues: ['notStarted', 'q1Running', 'q1Ended', 'q2Running', 'halfTime', 'q3Running', 'q3Ended', 'q4Running', 'gameEnded', 'oT1', 'oT2', 'oT3', 'oT4', 'oT5']
	},
	privateGame: {
		type: Boolean,
		label: 'Game privacy'
	},
	gameInfos: {
		type: GameInfosSchema
	},
	stats: {
		type: GameStatsSchema
	}
});
