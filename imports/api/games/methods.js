import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Games, gameSchema } from './schema.js';
import { gameStateValues } from '../schemas.js';

Meteor.methods({
	addGame(userId) {
		check(userId, String);

		const game = {
			userId,
			createdAt: new Date(),
			gameState: 'notStarted',
			privateGame: false,
			evolution: [
				[0, 0]
			],
			yourClub: '',
			yourClubTeamId: '',
			opponent: '',
			opponentTeamId: '',
			level: '',
			group: ''
		};

		check(game, gameSchema);

		return Games.insert(game);
	},
	addTeamsIdInsideGame(gameId, yourClubTeamId, opponentTeamId) {
		check(gameId, String);
		check(yourClubTeamId, String);
		check(opponentTeamId, String);

		return Games.update({
			_id: gameId
		}, {
			$set: {
				yourClubTeamId,
				opponentTeamId
			}
		});
	},
	deleteGame(gameId) {
		check(gameId, String);

		return Games.remove({
			_id: gameId
		});
	},
	gameInfosUpdate(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String },
			yourClub: { type: String },
			opponent: { type: String },
			level: { type: String, optional: true },
			group: { type: String, optional: true }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$set: {
				'gameInfos.yourClub': data.yourClub,
				'gameInfos.opponent': data.opponent,
				'gameInfos.level': data.level,
				'gameInfos.group': data.group
			}
		});
	},
	gameStateSwitch(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String },
			status: { type: String, allowedValues: gameStateValues }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$set: { gameState: data.status }
		});
	},
	newEvolScore(gameId, evolScore) {
		const evolScoreSchema = new SimpleSchema({
			gameIndex: { type: Number, min: 0 },
			scoreGap: { type: Number }
		});
		check(gameId, String);
		check(evolScore, evolScoreSchema);

		return Games.update({
			_id: gameId
		}, {
			$push: {
				evolution: [
					evolScore.gameIndex,
					evolScore.scoreGap
				]
			}
		});
	},
	correctNewEvolScore(gameId) {
		check(gameId, String);

		return Games.update({
			_id: gameId
		}, {
			$pop: {
				evolution: 1
			}
		});
	},
	offRebTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.rebounds.offReb': 1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	defRebTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.rebounds.defReb': 1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	correctionOffRebTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.rebounds.offReb': -1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionDefRebTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.rebounds.defReb': -1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	stealsTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.steals': 1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	correctionStealsTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.steals': -1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	turnoversTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.turnovers': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionTurnoversTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.turnovers': -1,
				'stats.yourClub.evaluation': 1
			}
		});
	}
});
