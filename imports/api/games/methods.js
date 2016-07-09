import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Games } from './schema.js';

Meteor.methods({
	addAGame(data) {
		let methodSchema = new SimpleSchema({
			userId: { type: String }
		});
		check(data, methodSchema);

		const game = {
			userId: data.userId,
			createdAt: new Date(),
			gameState: 'notStarted',
			privateGame: false,
			gameInfos: {
				yourClub: 'A',
				opponent: 'B',
				level: '',
				group: ''
			},
			stats: {
				yourClub: {
					score: 0,
					evaluation: 0,
					points: {
						onePointIn: 0,
						onePointOut: 0,
						twoPointsIn: 0,
						twoPointsOut: 0,
						threePointsIn: 0,
						threePointsOut: 0
					},
					assists: 0,
					rebounds: {
						offReb: 0,
						defReb: 0
					},
					fouls: {
						provFouls: {
							offFouls: 0,
							defFouls: 0
						},
						offFouls: 0,
						totalFouls: 0,
						defFouls: 0,
						foul1FT: 0,
						foul2FT: 0,
						foul3FT: 0,
						techFouls: 0,
						antiSportFouls: 0,
						disqualifyingFouls: 0
					},
					steals: 0,
					blocks: 0,
					turnovers: 0
				},
				opponent: {
					score: 0,
					evaluation: 0,
					points: {
						onePointIn: 0,
						onePointOut: 0,
						twoPointsIn: 0,
						twoPointsOut: 0,
						threePointsIn: 0,
						threePointsOut: 0
					},
					assists: 0,
					rebounds: {
						offReb: 0,
						defReb: 0
					},
					fouls: {
						provFouls: {
							offFouls: 0,
							defFouls: 0
						},
						offFouls: 0,
						totalFouls: 0,
						defFouls: 0,
						foul1FT: 0,
						foul2FT: 0,
						foul3FT: 0,
						techFouls: 0,
						antiSportFouls: 0,
						disqualifyingFouls: 0
					},
					steals: 0,
					blocks: 0,
					turnovers: 0
				},
				evolution: [
					[0, 0]
				]
			}
		};
		return Games.insert(game);
	},
	assistsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.assists': 1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	correctionAssistsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.assists': -1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	blocksTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.blocks': 1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	correctionBlocksTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.blocks': -1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	offProvFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.provFouls.offFouls': 1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	correctionOffProvFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.provFouls.offFouls': -1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	defProvFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.provFouls.defFouls': 1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	correctionDefProvFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.provFouls.defFouls': -1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	offFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.offFouls': 1,
				'stats.yourClub.fouls.totalFouls': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionOffFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.offFouls': -1,
				'stats.yourClub.fouls.totalFouls': -1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	defFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.defFouls': 1,
				'stats.yourClub.fouls.totalFouls': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionDefFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.defFouls': -1,
				'stats.yourClub.fouls.totalFouls': -1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	defFoulsOneFTTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.foul1FT': 1,
				'stats.yourClub.fouls.totalFouls': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionDefFoulsOneFTTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.foul1FT': -1,
				'stats.yourClub.fouls.totalFouls': -1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	defFoulsTwoFTTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.foul2FT': 1,
				'stats.yourClub.fouls.totalFouls': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionDefFoulsTwoFTTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.foul2FT': -1,
				'stats.yourClub.fouls.totalFouls': -1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	defFoulsThreeFTTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.foul3FT': 1,
				'stats.yourClub.fouls.totalFouls': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionDefFoulsThreeFTTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.foul3FT': -1,
				'stats.yourClub.fouls.totalFouls': -1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	techFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.techFouls': 1,
				'stats.yourClub.fouls.totalFouls': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionTechFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.techFouls': -1,
				'stats.yourClub.fouls.totalFouls': -1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	antiSportFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.antiSportFouls': 1,
				'stats.yourClub.fouls.totalFouls': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionAntiSportFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.antiSportFouls': -1,
				'stats.yourClub.fouls.totalFouls': -1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	disqualifyingFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.disqualifyingFouls': 1,
				'stats.yourClub.fouls.totalFouls': 1,
				'stats.yourClub.evaluation': -1
			}
		});
	},
	correctionDisqualifyingFoulsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.yourClub.fouls.disqualifyingFouls': -1,
				'stats.yourClub.fouls.totalFouls': -1,
				'stats.yourClub.evaluation': 1
			}
		});
	},
	gameDelete(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.remove({ _id: data.gameId });
	},
	gameInfosUpdate(data) {
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
			gameId: { type: String },
			status: { type: String, allowedValues: ['notStarted', 'q1Running', 'q1Ended', 'q2Running', 'halfTime', 'q3Running', 'q3Ended', 'q4Running', 'gameEnded', 'oT1', 'oT2', 'oT3', 'oT4', 'oT5'] }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$set: { gameState: data.status }
		});
	},
	onePointTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
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
	onePointTeamOpponent(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String },
			gameIndex: { type: Number, min: 1 },
			scoreGap: { type: Number }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.opponent.points.onePointIn': 1,
				'stats.opponent.score': 1,
				'stats.opponent.evaluation': 1
			},
			$push: { 'stats.evolution': [data.gameIndex, data.scoreGap] }
		});
	},
	onePointMissTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
	correctionOnePointTeamOpponent(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.opponent.points.onePointIn': -1,
				'stats.opponent.score': -1,
				'stats.opponent.evaluation': -1
			},
			$pop: { 'stats.evolution': 1 }
		});
	},
	twoPointsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
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
	twoPointsTeamOpponent(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String },
			gameIndex: { type: Number, min: 1 },
			scoreGap: { type: Number }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.opponent.points.twoPointsIn': 1,
				'stats.opponent.score': 2,
				'stats.opponent.evaluation': 2
			},
			$push: { 'stats.evolution': [data.gameIndex, data.scoreGap] }
		});
	},
	correctionTwoPointsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
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
	correctionTwoPointsTeamOpponent(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.opponent.points.twoPointsIn': -1,
				'stats.opponent.score': -2,
				'stats.opponent.evaluation': -2
			},
			$pop: { 'stats.evolution': 1 }
		});
	},
	twoPointsMissTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
	threePointsTeamOpponent(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String },
			gameIndex: { type: Number, min: 1 },
			scoreGap: { type: Number }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.opponent.points.threePointsIn': 1,
				'stats.opponent.score': 3,
				'stats.opponent.evaluation': 3
			},
			$push: { 'stats.evolution': [data.gameIndex, data.scoreGap] }
		});
	},
	correctionThreePointsTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
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
	correctionThreePointsTeamOpponent(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Games.update({ _id: data.gameId }, {
			$inc: {
				'stats.opponent.points.threePointsIn': -1,
				'stats.opponent.score': -3,
				'stats.opponent.evaluation': -3
			},
			$pop: { 'stats.evolution': 1 }
		});
	},
	threePointsMissTeamYourClub(data) {
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
