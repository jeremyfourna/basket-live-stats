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

export const gameSchema = new SimpleSchema({
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
		type: GameInfosSchema,
		label: 'Informations about the teams playing'
	},
	evolution: {
		type: [
			[Number, Number]
		],
		label: 'Game score evolution'
	},
	yourClub: {
		type: String,
		label: 'Your club name',
		optional: true
	},
	yourClubTeamId: {
		type: String,
		label: 'Your club team id in the Teams collection',
		optional: true
	},
	opponent: {
		type: String,
		label: 'Opponent club name',
		optional: true
	},
	opponentTeamId: {
		type: String,
		label: 'Your club team id in the Teams collection',
		optional: true
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

Games.schema = gameSchema;
