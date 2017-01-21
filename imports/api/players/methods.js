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

		// Loop 12 times because a team is composed of 12 players at max
		for (let i = 0; i < 12; i++) {
			// Change player's jersey
			player.jersey = 4 + i;

			// Check player input before inserting in DB
			check(player, playerSchema);

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
	'Players.endedGamePlayers': (gameId) => {
		// Check method params
		check(gameId, String);
		// If OK the code continue
		return Players.update({ gameId }, {
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
	'Players.assist': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				assists: 1,
				evaluation: 1
			}
		});
	},
	'Players.correctAssist': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				assists: -1,
				evaluation: -1
			}
		});
	},
	'Players.block': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'blocks': 1,
				evaluation: 1
			}
		});
	},
	'Players.correctBlock': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'blocks': -1,
				evaluation: -1
			}
		});
	},
	'Players.provOffFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.provOffFouls': 1,
				evaluation: 1
			}
		});
	},
	'Players.correctProvOffFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.provOffFouls': -1,
				evaluation: -1
			}
		});
	},
	'Players.provDefFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.provDefFouls': 1,
				evaluation: 1
			}
		});
	},
	'Players.correctProvDefFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.provDefFouls': -1,
				evaluation: -1
			}
		});
	},
	'Players.offFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.offFouls': 1,
				'fouls.totalFouls': 1,
				evaluation: -1
			}
		});
	},
	'Players.correctOffFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.offFouls': -1,
				'fouls.totalFouls': -1,
				evaluation: 1
			}
		});
	},
	'Players.defFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.defFouls': 1,
				'fouls.totalFouls': 1,
				evaluation: -1
			}
		});
	},
	'Players.correctDefFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.defFouls': -1,
				'fouls.totalFouls': -1,
				evaluation: 1
			}
		});
	},
	'Players.foul1FT': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.foul1FT': 1,
				'fouls.totalFouls': 1,
				evaluation: -1
			}
		});
	},
	'Players.correctFoul1FT': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.foul1FT': -1,
				'fouls.totalFouls': -1,
				evaluation: 1
			}
		});
	},
	'Players.foul2FT': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.foul2FT': 1,
				'fouls.totalFouls': 1,
				evaluation: -1
			}
		});
	},
	'Players.correctFoul2FT': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.foul2FT': -1,
				'fouls.totalFouls': -1,
				evaluation: 1
			}
		});
	},
	'Players.foul3FT': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.foul3FT': 1,
				'fouls.totalFouls': 1,
				evaluation: -1
			}
		});
	},
	'Players.correctFoul3FT': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.foul3FT': -1,
				'fouls.totalFouls': -1,
				evaluation: 1
			}
		});
	},
	'Players.techFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.techFouls': 1,
				'fouls.totalFouls': 1,
				evaluation: -1
			}
		});
	},
	'Players.correctTechFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.techFouls': -1,
				'fouls.totalFouls': -1,
				evaluation: 1
			}
		});
	},
	'Players.antiSportFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.antiSportFouls': 1,
				'fouls.totalFouls': 1,
				evaluation: -1
			}
		});
	},
	'Players.correctAntiSportFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.antiSportFouls': -1,
				'fouls.totalFouls': -1,
				evaluation: 1
			}
		});
	},
	'Players.disqualifyingFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.disqualifyingFouls': 1,
				'fouls.totalFouls': 1,
				evaluation: -1
			}
		});
	},
	'Players.correctDisqualifyingFoul': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'fouls.disqualifyingFouls': -1,
				'fouls.totalFouls': -1,
				evaluation: 1
			}
		});
	},
	'Players.onePointIn': (playerId) => {
		// Check method params
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.onePointIn': 1,
				'points.totalPoints': 1,
				evaluation: 1
			}
		});
	},
	'Players.correctOnePointIn': (playerId) => {
		// Check method params
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
	'Players.onePointOut': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.onePointOut': 1,
				evaluation: -1
			}
		});
	},
	'Players.correctOnePointOut': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.onePointOut': -1,
				evaluation: 1
			}
		});
	},
	'Players.twoPointsIn': (playerId) => {
		// Check method params
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.twoPointsIn': 1,
				'points.totalPoints': 2,
				evaluation: 2
			}
		});
	},
	'Players.correctTwoPointsIn': (playerId) => {
		// Check method params
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.twoPointsIn': -1,
				'points.totalPoints': -2,
				evaluation: -2
			}
		});
	},
	'Players.twoPointsOut': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.twoPointsOut': 1,
				evaluation: -1
			}
		});
	},
	'Players.correctTwoPointsOut': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.twoPointsOut': -1,
				evaluation: 1
			}
		});
	},
	'Players.threePointsIn': (playerId) => {
		// Check method params
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.threePointsIn': 1,
				'points.totalPoints': 3,
				evaluation: 3
			}
		});
	},
	'Players.correctThreePointsIn': (playerId) => {
		// Check method params
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.threePointsIn': -1,
				'points.totalPoints': -3,
				evaluation: -3
			}
		});
	},
	'Players.threePointsOut': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.threePointsOut': 1,
				evaluation: -1
			}
		});
	},
	'Players.correctThreePointsOut': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				'points.threePointsOut': -1,
				evaluation: 1
			}
		});
	},
	'Players.offReb': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				offReb: 1,
				evaluation: 1
			}
		});
	},
	'Players.correctOffReb': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				offReb: -1,
				evaluation: -1
			}
		});
	},
	'Players.defReb': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				defReb: 1,
				evaluation: 1
			}
		});
	},
	'Players.correctDefReb': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				defReb: -1,
				evaluation: -1
			}
		});
	},
	'Players.steal': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				steals: 1,
				evaluation: 1
			}
		});
	},
	'Players.correctSteal': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				steals: -1,
				evaluation: -1
			}
		});
	},
	'Players.turnover': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				turnovers: 1,
				evaluation: -1
			}
		});
	},
	'Players.correctTurnover': (teamId, playerId) => {
		// Check method params
		check(teamId, String); // teamId is passed upon the hooks that will run after this method
		check(playerId, String);
		// If OK the code continue
		return Players.update({ _id: playerId }, {
			$inc: {
				turnovers: -1,
				evaluation: 1
			}
		});
	}
});
