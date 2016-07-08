import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Players } from './schema.js';

Meteor.methods({
	assists(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.assists': 1,
				'stats.evaluation': 1
			}
		});
	},
	correctionAssists(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.assists': -1,
				'stats.evaluation': -1
			}
		});
	},
	blocks(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.blocks': 1,
				'stats.evaluation': 1
			}
		});
	},
	correctionBlocks(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.blocks': -1,
				'stats.evaluation': -1
			}
		});
	},
	endedGamesPlayers(data) {
		let methodSchema = new SimpleSchema({
			gameId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ gameId: data.gameId }, {
			$set: {
				inPlay: false
			},
			$push: {
				gameTime: {
					minutes: 0,
					secondes: 0,
					way: 'out',
					gameState: 'gameEnded'
				}
			}
		}, {
			multi: true
		});
	},
	offProvFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.provFouls.offFouls': 1,
				'stats.evaluation': 1
			}
		});
	},
	correctionOffProvFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.provFouls.offFouls': -1,
				'stats.evaluation': -1
			}
		});
	},
	defProvFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.provFouls.defFouls': 1,
				'stats.evaluation': 1
			}
		});
	},
	correctionDefProvFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.provFouls.defFouls': -1,
				'stats.evaluation': -1
			}
		});
	},
	offFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.offFouls': 1,
				'stats.fouls.totalFouls': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionOffFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.offFouls': -1,
				'stats.fouls.totalFouls': -1,
				'stats.evaluation': 1
			}
		});
	},
	defFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.defFouls': 1,
				'stats.fouls.totalFouls': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionDefFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.defFouls': -1,
				'stats.fouls.totalFouls': -1,
				'stats.evaluation': 1
			}
		});
	},
	defFoulsOneFT(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.foul1FT': 1,
				'stats.fouls.totalFouls': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionDefFoulsOneFT(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.foul1FT': -1,
				'stats.fouls.totalFouls': -1,
				'stats.evaluation': 1
			}
		});
	},
	defFoulsTwoFT(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.foul2FT': 1,
				'stats.fouls.totalFouls': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionDefFoulsTwoFT(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.foul2FT': -1,
				'stats.fouls.totalFouls': -1,
				'stats.evaluation': 1
			}
		});
	},
	defFoulsThreeFT(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.foul3FT': 1,
				'stats.fouls.totalFouls': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionDefFoulsThreeFT(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.foul3FT': -1,
				'stats.fouls.totalFouls': -1,
				'stats.evaluation': 1
			}
		});
	},
	techFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.techFouls': 1,
				'stats.fouls.totalFouls': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionTechFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.techFouls': -1,
				'stats.fouls.totalFouls': -1,
				'stats.evaluation': 1
			}
		});
	},
	antiSportFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.antiSportFouls': 1,
				'stats.fouls.totalFouls': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionAntiSportFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.antiSportFouls': -1,
				'stats.fouls.totalFouls': -1,
				'stats.evaluation': 1
			}
		});
	},
	disqualifyingFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.disqualifyingFouls': 1,
				'stats.fouls.totalFouls': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionDisqualifyingFouls(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.fouls.disqualifyingFouls': -1,
				'stats.fouls.totalFouls': -1,
				'stats.evaluation': 1
			}
		});
	},
	goingInPlay(playerData) {
		return Players.update({
			_id: playerData._id
		}, {
			$set: {
				inPlay: true
			},
			$push: {
				gameTime: {
					minutes: playerData.minutes,
					secondes: playerData.secondes,
					way: 'in',
					gameState: playerData.state
				}
			}
		});
	},
	goingOnTheBench(playerData) {
		return Players.update({
			_id: playerData._id
		}, {
			$set: {
				inPlay: false
			},
			$push: {
				gameTime: {
					minutes: playerData.minutes,
					secondes: playerData.secondes,
					way: 'out',
					gameState: playerData.state
				}
			}
		});
	},
	/*playerInsert(gameId, playersData) { // To refactor
		var playersId = [];
		playersData.map((cur, index, array) => {
			var player = {
				gameId: gameId,
				teamId: cur.teamId,
				firstName: cur.firstName,
				lastName: cur.lastName,
				jersey: cur.jersey,
				inPlay: false,
				gameTime: [],
				stats: {
					points: {
						onePointIn: 0,
						onePointOut: 0,
						twoPointsIn: 0,
						twoPointsOut: 0,
						threePointsIn: 0,
						threePointsOut: 0,
						totalPoints: 0
					},
					evaluation: 0,
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
				}
			};
			var data = Players.insert(player);
			playersId.push(data);
		});
		for (var i = 4; i <= 15; i++) {
			var opponentPlayer = {
				gameId: gameId,
				teamId: 'opponent',
				firstName: '',
				lastName: '',
				jersey: i,
				inPlay: false,
				gameTime: [],
				stats: {
					points: {
						onePointIn: 0,
						onePointOut: 0,
						twoPointsIn: 0,
						twoPointsOut: 0,
						threePointsIn: 0,
						threePointsOut: 0,
						totalPoints: 0
					},
					evaluation: 0,
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
				}
			};
			var opponentdata = Players.insert(opponentPlayer);
			playersId.push(opponentdata);
		}
		return {
			ids: playersId
		};
	},*/
	playerUpdate(playerData) {
		return Players.update({
			_id: playerData.data
		}, {
			$set: {
				firstName: playerData.firstName,
				lastName: playerData.lastName
			}
		});
	},
	onePoint(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.onePointIn': 1,
				'stats.points.totalPoints': 1,
				'stats.evaluation': 1
			}
		});
	},
	correctionOnePoint(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.onePointIn': -1,
				'stats.points.totalPoints': -1,
				'stats.evaluation': -1
			}
		});
	},
	onePointMiss(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.onePointOut': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionOnePointMiss(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.onePointOut': -1,
				'stats.evaluation': 1
			}
		});
	},
	twoPoints(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.twoPointsIn': 1,
				'stats.points.totalPoints': 2,
				'stats.evaluation': 2
			}
		});
	},
	correctionTwoPoints(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.twoPointsIn': -1,
				'stats.points.totalPoints': -2,
				'stats.evaluation': -2
			}
		});
	},
	twoPointsMiss(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.twoPointsOut': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionTwoPointsMiss(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.twoPointsOut': -1,
				'stats.evaluation': 1
			}
		});
	},
	threePoints(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.threePointsIn': 1,
				'stats.points.totalPoints': 3,
				'stats.evaluation': 3
			}
		});
	},
	correctionThreePoints(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.threePointsIn': -1,
				'stats.points.totalPoints': -3,
				'stats.evaluation': -3
			}
		});
	},
	threePointsMiss(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.threePointsOut': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionThreePointsMiss(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.points.threePointsOut': -1,
				'stats.evaluation': 1
			}
		});
	},
	offReb(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.rebounds.offReb': 1,
				'stats.evaluation': 1
			}
		});
	},
	defReb(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.rebounds.defReb': 1,
				'stats.evaluation': 1
			}
		});
	},
	correctionOffReb(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.rebounds.offReb': -1,
				'stats.evaluation': -1
			}
		});
	},
	correctionDefReb(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.rebounds.defReb': -1,
				'stats.evaluation': -1
			}
		});
	},
	steals(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.steals': 1,
				'stats.evaluation': 1
			}
		});
	},
	correctionSteals(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.steals': -1,
				'stats.evaluation': -1
			}
		});
	},
	turnovers(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.turnovers': 1,
				'stats.evaluation': -1
			}
		});
	},
	correctionTurnovers(data) {
		let methodSchema = new SimpleSchema({
			playerId: { type: String }
		});
		check(data, methodSchema);

		return Players.update({ _id: data.playerId }, {
			$inc: {
				'stats.turnovers': -1,
				'stats.evaluation': 1
			}
		});
	}
});
