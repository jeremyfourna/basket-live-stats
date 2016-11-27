import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Players, playerSchema } from './schema.js';
import { gameStateValues } from '../schemas.js';

Meteor.methods({
	addPlayers(teamId, gameId) {
		check(teamId, String);
		check(gameId, String);

		const player = {
			gameId,
			teamId,
			firstName: '',
			lastName: '',
			jersey: 4,
			inPlay: false,
			gameTime: [],
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
			offReb: 0,
			defReb: 0,
			fouls: {
				provOffFouls: 0,
				provDefFouls: 0,
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
		};

		check(player, playerSchema);

		for (let i = 0; i < 12; i++) {
			player.jersey = 4 + i;

			Players.insert(player);
		}

		return true;
	},
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
	goingInPlay(data) {
		const methodSchema = new SimpleSchema({
			playerId: { type: String },
			minutes: { type: Number, min: 0, max: 10 },
			secondes: { type: Number, min: 0, max: 60 },
			gameState: { type: String, allowedValues: gameStateValues }
		});
		check(data, methodSchema);

		return Players.update({
			_id: data.playerId
		}, {
			$set: {
				inPlay: true
			},
			$push: {
				gameTime: {
					minutes: data.minutes,
					secondes: data.secondes,
					way: 'in',
					gameState: data.gameState
				}
			}
		});
	},
	goingOnTheBench(data) {
		const methodSchema = new SimpleSchema({
			playerId: { type: String },
			minutes: { type: Number, min: 0, max: 10 },
			secondes: { type: Number, min: 0, max: 60 },
			gameState: { type: String, allowedValues: gameStateValues }
		});
		check(data, methodSchema);

		return Players.update({
			_id: data.playerId
		}, {
			$set: {
				inPlay: false
			},
			$push: {
				gameTime: {
					minutes: data.minutes,
					secondes: data.secondes,
					way: 'out',
					gameState: data.gameState
				}
			}
		});
	},
	/*
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
	},*/
	onePointInForPlayer(gameId, teamId, playerId, evolScore) {
		const evolScoreSchema = new SimpleSchema({
			gameIndex: { type: Number, min: 0 },
			scoreGap: { type: Number }
		});
		check(gameId, String);
		check(teamId, String);
		check(playerId, String);
		check(evolScore, evolScoreSchema);

		return Players.update({
			_id: playerId
		}, {
			$inc: {
				'points.onePointIn': 1,
				'points.totalPoints': 1,
				evaluation: 1
			}
		});
	},
	correctOnePointInForPlayer(gameId, teamId, playerId) {
		check(gameId, String);
		check(teamId, String);
		check(playerId, String);

		return Players.update({
			_id: playerId
		}, {
			$inc: {
				'points.onePointIn': -1,
				'points.totalPoints': -1,
				evaluation: -1
			}
		});
	},
	/*
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
		twoPoints(playerId) {
			check(playerId, String);

			return Players.update({
				_id: playerId
			}, {
				$inc: {
					'stats.points.twoPointsIn': 1,
					'stats.points.totalPoints': 2,
					'stats.evaluation': 2
				}
			});
		},
		correctionTwoPoints(playerId) {
			check(playerId, String);

			return Players.update({
				_id: playerId
			}, {
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
		threePoints(playerId) {
			check(playerId, String);

			return Players.update({
				_id: playerId
			}, {
				$inc: {
					'stats.points.threePointsIn': 1,
					'stats.points.totalPoints': 3,
					'stats.evaluation': 3
				}
			});
		},
		correctionThreePoints(playerId) {
			check(playerId, String);

			return Players.update({
				_id: playerId
			}, {
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
		*/
});
