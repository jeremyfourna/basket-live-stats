import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Players, playerSchema } from './schema.js';
import { gameStateValues } from '../schemas.js';

Meteor.methods({
	'Players.addPlayers': (teamId, gameId) => {
		// Check method params
		check(teamId, String);
		check(gameId, String);

		// Define player document
		const player = {
			gameId,
			teamId,
			firstName: '',
			lastName: '',
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

		// Check player input before inserting in DB
		check(player, playerSchema);
		// Loop 12 times because a team is composed of 12 players at max
		for (let i = 0; i < 12; i++) {
			// Change player's jersey
			player.jersey = 4 + i;

			Players.insert(player);
		}

		// Return true to allow client and server to continue
		return true;
	},
	'Players.updatePlayerInfos': (data) => {
		// Check method params
		const methodSchema = new SimpleSchema({
			playerId: { type: String },
			firstName: { type: String },
			lastName: { type: String }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Players.update({ _id: data.playerId }, {
			$set: {
				firstName: data.firstName,
				lastName: data.lastName
			}
		});
	},
	'Players.goingInPlay': (data) => {
		// Check method params
		const methodSchema = new SimpleSchema({
			playerId: { type: String },
			minutes: { type: Number, min: 0, max: 10 },
			secondes: { type: Number, min: 0, max: 60 },
			gameState: { type: String, allowedValues: gameStateValues }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Players.update({ _id: data.playerId }, {
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
	'Players.goingOnTheBench': (data) => {
		// Check method params
		const methodSchema = new SimpleSchema({
			playerId: { type: String },
			minutes: { type: Number, min: 0, max: 10 },
			secondes: { type: Number, min: 0, max: 60 },
			gameState: { type: String, allowedValues: gameStateValues }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Players.update({ _id: data.playerId }, {
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
	'Players.assistsIn': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // TeamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				assists: 1,
				evaluation: 1
			}
		});
	},
	'Players.correctAssistsIn': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // TeamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				assists: -1,
				evaluation: -1
			}
		});
	},
	/*'Players.
': 		blocks(data) {=>
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
		'Players.correctBlocks': (data) {=>
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
		'Players.endedGamesPlayers': (data) {=>
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
		'Players.offProvFouls': (data) {=>
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
		'Players.correctOffProvFouls': (data) {=>
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
		'Players.defProvFouls': (data) {=>
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
		'Players.correctDefProvFouls': (data) {=>
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
		'Players.offFouls': (data) {=>
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
		'Players.correctOffFouls': (data) {=>
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
		'Players.defFouls': (data) {=>
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
		'Players.correctDefFouls': (data) {=>
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
		'Players.defFoulsOneFT': (data) {=>
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
		'Players.correctDefFoulsOneFT': (data) {=>
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
		'Players.defFoulsTwoFT': (data) {=>
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
		'Players.correctDefFoulsTwoFT': (data) {=>
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
		'Players.defFoulsThreeFT': (data) {=>
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
		'Players.correctDefFoulsThreeFT': (data) {=>
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
		'Players.techFouls': (data) {=>
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
		'Players.correctTechFouls': (data) {=>
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
		'Players.antiSportFouls': (data) {=>
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
		'Players.correctAntiSportFouls': (data) {=>
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
		'Players.disqualifyingFouls': (data) {=>
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
		'Players.correctDisqualifyingFouls': (data) {=>
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
	'Players.onePointIn': (gameId, teamId, playerId, evolScore) => {
		// Check method params
		const evolScoreSchema = new SimpleSchema({
			gameIndex: { type: Number, min: 0 },
			scoreGap: { type: Number }
		});
		check(gameId, String); // GameId is passed upon the hooks that will run after this method
		check(teamId, String); // TeamId is passed upon the hooks that will run after this method
		check(playerId, String);
		check(evolScore, evolScoreSchema); // evolScore is passed upon the hooks that will run after this method
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.onePointIn': 1,
				'points.totalPoints': 1,
				evaluation: 1
			}
		});
	},
	'Players.correctOnePointIn': (gameId, teamId, playerId) => {
		// Check method params
		check(gameId, String); // GameId is passed upon the hooks that will run after this method
		check(teamId, String); // TeamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.onePointIn': -1,
				'points.totalPoints': -1,
				evaluation: -1
			}
		});
	},
	/*'Players.
': 		onePointMiss(data) {=>
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
		'Players.correctOnePointMiss': (data) {=>
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
		},*/
	'Players.twoPointsIn': (gameId, teamId, playerId, evolScore) => {
		// Check method params
		const evolScoreSchema = new SimpleSchema({
			gameIndex: { type: Number, min: 0 },
			scoreGap: { type: Number }
		});
		check(gameId, String); // GameId is passed upon the hooks that will run after this method
		check(teamId, String); // TeamId is passed upon the hooks that will run after this method
		check(playerId, String);
		check(evolScore, evolScoreSchema); // evolScore is passed upon the hooks that will run after this method
		// If OK the code continue
		return Players.update({
			_id: playerId
		}, {
			$inc: {
				'points.twoPointsIn': 1,
				'points.totalPoints': 2,
				evaluation: 2
			}
		});
	},
	'Players.correctTwoPointsIn': (gameId, teamId, playerId) => {
		// Check method params
		check(gameId, String); // GameId is passed upon the hooks that will run after this method
		check(teamId, String); // TeamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({
			_id: playerId
		}, {
			$inc: {
				'points.twoPointsIn': -1,
				'points.totalPoints': -2,
				evaluation: -2
			}
		});
	},
	/*
		'Players.twoPointsMiss': (data) => {
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
		'Players.correctTwoPointsMiss': (data) => {
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
		*/
	'Players.threePointsIn': (gameId, teamId, playerId, evolScore) => {
		// Check method params
		const evolScoreSchema = new SimpleSchema({
			gameIndex: { type: Number, min: 0 },
			scoreGap: { type: Number }
		});
		check(gameId, String); // GameId is passed upon the hooks that will run after this method
		check(teamId, String); // TeamId is passed upon the hooks that will run after this method
		check(playerId, String);
		check(evolScore, evolScoreSchema); // evolScore is passed upon the hooks that will run after this method
		// If OK the code continue
		return Players.update({
			_id: playerId
		}, {
			$inc: {
				'points.threePointsIn': 1,
				'points.totalPoints': 3,
				evaluation: 3
			}
		});
	},
	'Players.correctThreePointsIn': (gameId, teamId, playerId) => {
		// Check method params
		check(gameId, String); // GameId is passed upon the hooks that will run after this method
		check(teamId, String); // TeamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({
			_id: playerId
		}, {
			$inc: {
				'points.threePointsIn': -1,
				'points.totalPoints': -3,
				evaluation: -3
			}
		});
	},
	/*'Players.threePointsMiss': (data) => {
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
	'Players.correctThreePointsMiss': (data) => {
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
	'Players.offReb': (data) => {
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
	'Players.defReb': (data) => {
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
	'Players.correctOffReb': (data) => {
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
	'Players.correctDefReb': (data) => {
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
	'Players.steals': (data) => {
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
	'Players.correctSteals': (data) => {
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
	'Players.turnovers': (data) => {
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
	'Players.correctTurnovers': (data) => {
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
	} */
});
