import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Games, gameSchema } from './schema.js';

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
	gameDelete(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.remove({ _id: data.gameId });
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
			status: { type: String, allowedValues: ['notStarted', 'q1Running', 'q1Ended', 'q2Running', 'halfTime', 'q3Running', 'q3Ended', 'q4Running', 'gameEnded', 'oT1', 'oT2', 'oT3', 'oT4', 'oT5'] }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$set: { gameState: data.status }
		});
	},
	onePointTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String },
			gameIndex: { type: Number, min: 1 },
			scoreGap: { type: Number }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.onePointIn': 1,
				'stats.yourClub.score': 1,
				'stats.yourClub.evaluation': 1
			},
			$push: { 'stats.evolution': [data.gameIndex, data.scoreGap] }
		});
	},
	onePointTeamOpponent(gameId, playerId, evolScore) {
		const evolScoreSchema = new SimpleSchema({
			gameIndex: { type: Number, min: 1 },
			scoreGap: { type: Number }
		});
		check(gameId, String);
		check(playerId, String);
		check(evolScore, evolScoreSchema);

		return Games.update({
			_id: gameId
		}, {
			$inc: {
				'stats.opponent.points.onePointIn': 1,
				'stats.opponent.score': 1,
				'stats.opponent.evaluation': 1
			},
			$push: {
				'stats.evolution': [
					evolScore.gameIndex,
					evolScore.scoreGap
				]
			}
		});
	},
	onePointMissTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.onePointOut': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionOnePointMissTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.onePointOut': -1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	correctionOnePointTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.onePointIn': -1,
				'stats.yourClub.score': -1,
				'stats.yourClub.evaluation': -1
			},
			$pop: { 'stats.evolution': 1 }
		});
	},
	correctionOnePointTeamOpponent(gameId, playerId) {
		check(gameId, String);
		check(playerId, String);

		return Games.update({
			_id: gameId
		}, {
			$inc: {
				'stats.opponent.points.onePointIn': -1,
				'stats.opponent.score': -1,
				'stats.opponent.evaluation': -1
			},
			$pop: {
				'stats.evolution': 1
			}
		});
	},
	twoPointsTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String },
			gameIndex: { type: Number, min: 1 },
			scoreGap: { type: Number }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.twoPointsIn': 1,
				'stats.yourClub.score': 2,
				'stats.yourClub.evaluation': 2
			},
			$push: { 'stats.evolution': [data.gameIndex, data.scoreGap] }
		});
	},
	twoPointsTeamOpponent(gameId, playerId, evolScore) {
		const evolScoreSchema = new SimpleSchema({
			gameIndex: { type: Number, min: 1 },
			scoreGap: { type: Number }
		});
		check(gameId, String);
		check(playerId, String);
		check(evolScore, evolScoreSchema);

		return Games.update({
			_id: gameId
		}, {
			$inc: {
				'stats.opponent.points.twoPointsIn': 1,
				'stats.opponent.score': 2,
				'stats.opponent.evaluation': 2
			},
			$push: {
				'stats.evolution': [
					evolScore.gameIndex,
					evolScore.scoreGap
				]
			}
		});
	},
	correctionTwoPointsTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.twoPointsIn': -1,
				'stats.yourClub.score': -2,
				'stats.yourClub.evaluation': -2
			},
			$pop: { 'stats.evolution': 1 }
		});
	},
	correctionTwoPointsTeamOpponent(gameId, playerId) {
		check(gameId, String);
		check(playerId, String);

		return Games.update({
			_id: gameId
		}, {
			$inc: {
				'stats.opponent.points.twoPointsIn': -1,
				'stats.opponent.score': -2,
				'stats.opponent.evaluation': -2
			},
			$pop: {
				'stats.evolution': 1
			}
		});
	},
	twoPointsMissTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.twoPointsOut': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionTwoPointsMissTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.twoPointsOut': -1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	threePointsTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String },
			gameIndex: { type: Number, min: 1 },
			scoreGap: { type: Number }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.threePointsIn': 1,
				'stats.yourClub.score': 3,
				'stats.yourClub.evaluation': 3
			},
			$push: { 'stats.evolution': [data.gameIndex, data.scoreGap] }
		});
	},
	threePointsTeamOpponent(gameId, playerId, evolScore) {
		const evolScoreSchema = new SimpleSchema({
			gameIndex: { type: Number, min: 1 },
			scoreGap: { type: Number }
		});
		check(gameId, String);
		check(playerId, String);
		check(evolScore, evolScoreSchema);

		return Games.update({
			_id: gameId
		}, {
			$inc: {
				'stats.opponent.points.threePointsIn': 1,
				'stats.opponent.score': 3,
				'stats.opponent.evaluation': 3
			},
			$push: {
				'stats.evolution': [
					evolScore.gameIndex,
					evolScore.scoreGap
				]
			}
		});
	},
	correctionThreePointsTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.threePointsIn': -1,
				'stats.yourClub.score': -3,
				'stats.yourClub.evaluation': -3
			},
			$pop: { 'stats.evolution': 1 }
		});
	},
	correctionThreePointsTeamOpponent(gameId, playerId) {
		check(gameId, String);
		check(playerId, String);

		return Games.update({
			_id: gameId
		}, {
			$inc: {
				'stats.opponent.points.threePointsIn': -1,
				'stats.opponent.score': -3,
				'stats.opponent.evaluation': -3
			},
			$pop: {
				'stats.evolution': 1
			}
		});
	},
	threePointsMissTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.threePointsOut': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionThreePointsMissTeamYourClub(data) {
		const methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.points.threePointsOut': -1,
				'stats.yourClub.evaluation': 1
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
