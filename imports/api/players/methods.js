import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Players, playerSchema } from './schema.js';
import { gameStateValues } from '../schemas.js';

Meteor.methods({
	addPlayers(teamId, gameId) {
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
	updatePlayerInfos(data) {
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
	goingInPlay(data) {
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
	goingOnTheBench(data) {
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
	assistsInForPlayer(teamId, playerId) {
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
	correctAssistsInForPlayer(teamId, playerId) {
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
	/*
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
		correctBlocks(data) {
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
		correctOffProvFouls(data) {
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
		correctDefProvFouls(data) {
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
		correctOffFouls(data) {
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
		correctDefFouls(data) {
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
		correctDefFoulsOneFT(data) {
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
		correctDefFoulsTwoFT(data) {
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
		correctDefFoulsThreeFT(data) {
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
		correctTechFouls(data) {
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
		correctAntiSportFouls(data) {
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
		correctDisqualifyingFouls(data) {
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
	correctOnePointInForPlayer(gameId, teamId, playerId) {
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
		correctOnePointMiss(data) {
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
	twoPointsInForPlayer(gameId, teamId, playerId, evolScore) {
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
	correctTwoPointsInForPlayer(gameId, teamId, playerId) {
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
	/*twoPointsMiss(data) {
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
	correctTwoPointsMiss(data) {
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
	},*/
	threePointsInForPlayer(gameId, teamId, playerId, evolScore) {
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
	correctThreePointsInForPlayer(gameId, teamId, playerId) {
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
	/*threePointsMiss(data) {
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
	correctThreePointsMiss(data) {
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
	correctOffReb(data) {
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
	correctDefReb(data) {
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
	correctSteals(data) {
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
	correctTurnovers(data) {
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
