Games = new Mongo.Collection('games');

Games.allow({
	insert: function(userId, doc) {
		// the user must be logged in, and the document must be owned by the user
		return (userId && doc.userId === userId);
	},
	update: function(userId, doc, fields, modifier) {
		// can only change your own documents
		return doc.userId === userId;
	},
	remove: function(userId, doc) {
		// can only remove your own documents
		return doc.userId === userId;
	},
	fetch: ['userId']
});

Games.deny({
	update: function(userId, docs, fields, modifier) {
		// can't change author
		return _.contains(fields, 'author');
	},
	update: function(userId, docs, fields, modifier) {
		// can't change userId
		return _.contains(fields, 'userId');
	},
	fetch: ['author', 'userId']
});


Meteor.methods({
	gameInsert: function(gameData) {
		var user = Meteor.user();
		var game = {
			userId: user._id,
			author: user.username,
			createdAt: new Date(),
			state: 'notStarted',
			gameInfos: gameData.gameInfos,
			homeTeam: gameData.homeTeam,
			awayTeam: gameData.awayTeam,
			gameStats: {
				score: {
					homeTeam: 0,
					awayTeam: 0
				},
				evaluation: {
					homeTeam: 0,
					awayTeam: 0
				},
				shoots: {
					homeTeam: {
						onePointIn: 0,
						onePointOut: 0,
						twoPointsIn: 0,
						twoPointsOut: 0,
						threePointsIn: 0,
						threePointsOut: 0
					},
					awayTeam: {
						onePointIn: 0,
						onePointOut: 0,
						twoPointsIn: 0,
						twoPointsOut: 0,
						threePointsIn: 0,
						threePointsOut: 0
					}
				},
				assists: {
					homeTeam: 0,
					awayTeam: 0
				},
				rebounds: {
					homeTeam: {
						offReb: 0,
						defReb: 0
					},
					awayTeam: {
						offReb: 0,
						defReb: 0
					}
				},
				fouls: {
					homeTeam: {
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
					awayTeam: {
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
					}
				},
				steals: {
					homeTeam: 0,
					awayTeam: 0
				},
				blocks: {
					homeTeam: 0,
					awayTeam: 0
				},
				turnovers: {
					homeTeam: 0,
					awayTeam: 0
				}
			}
		};
		var gameId = Games.insert(game);
		return {
			_id: gameId
		};
	},
	gameInfosUpdate: function(gameInfos, gameId) {
		Games.update({
			_id: gameId
		}, {
			$set: {
				"gameInfos.homeTeam": gameInfos.homeTeam,
				"gameInfos.awayTeam": gameInfos.awayTeam,
				"gameInfos.category": gameInfos.category,
				"gameInfos.level": gameInfos.level,
				"gameInfos.group": gameInfos.group,
				"privateGame": gameInfos.privateGame
			}
		});
	},
	participantsUpdate: function(currentGame, homeTeam, awayTeam) {
		Games.update(currentGame, {
			$set: {
				homeTeam: homeTeam,
				awayTeam: awayTeam
			}
		});
	},
	playerUpdate: function(playerInfo) {
		if (playerInfo.playerIndex === 0) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.0.firstName': playerInfo.firstName,
						'homeTeam.players.0.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.0.firstName': playerInfo.firstName,
						'awayTeam.players.0.lastName': playerInfo.lastName
					}
				});
			}
		} else if (playerInfo.playerIndex === 1) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.1.firstName': playerInfo.firstName,
						'homeTeam.players.1.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.1.firstName': playerInfo.firstName,
						'awayTeam.players.1.lastName': playerInfo.lastName
					}
				});
			}
		} else if (playerInfo.playerIndex === 2) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.2.firstName': playerInfo.firstName,
						'homeTeam.players.2.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.2.firstName': playerInfo.firstName,
						'awayTeam.players.2.lastName': playerInfo.lastName
					}
				});
			}
		} else if (playerInfo.playerIndex === 3) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.3.firstName': playerInfo.firstName,
						'homeTeam.players.3.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.3.firstName': playerInfo.firstName,
						'awayTeam.players.3.lastName': playerInfo.lastName
					}
				});
			}
		} else if (playerInfo.playerIndex === 4) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.4.firstName': playerInfo.firstName,
						'homeTeam.players.4.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.4.firstName': playerInfo.firstName,
						'awayTeam.players.4.lastName': playerInfo.lastName
					}
				});
			}
		} else if (playerInfo.playerIndex === 5) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.5.firstName': playerInfo.firstName,
						'homeTeam.players.5.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.5.firstName': playerInfo.firstName,
						'awayTeam.players.5.lastName': playerInfo.lastName
					}
				});
			}
		} else if (playerInfo.playerIndex === 6) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.6.firstName': playerInfo.firstName,
						'homeTeam.players.6.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.6.firstName': playerInfo.firstName,
						'awayTeam.players.6.lastName': playerInfo.lastName
					}
				});
			}
		} else if (playerInfo.playerIndex === 7) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.7.firstName': playerInfo.firstName,
						'homeTeam.players.7.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.7.firstName': playerInfo.firstName,
						'awayTeam.players.7.lastName': playerInfo.lastName
					}
				});
			}
		} else if (playerInfo.playerIndex === 8) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.8.firstName': playerInfo.firstName,
						'homeTeam.players.8.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.8.firstName': playerInfo.firstName,
						'awayTeam.players.8.lastName': playerInfo.lastName
					}
				});
			}
		} else if (playerInfo.playerIndex === 9) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.9.firstName': playerInfo.firstName,
						'homeTeam.players.9.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.9.firstName': playerInfo.firstName,
						'awayTeam.players.9.lastName': playerInfo.lastName
					}
				});
			}
		} else if (playerInfo.playerIndex === 10) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.10.firstName': playerInfo.firstName,
						'homeTeam.players.10.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.10.firstName': playerInfo.firstName,
						'awayTeam.players.10.lastName': playerInfo.lastName
					}
				});
			}
		} else if (playerInfo.playerIndex === 11) {
			if (playerInfo.team === 'homeTeam') {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'homeTeam.players.11.firstName': playerInfo.firstName,
						'homeTeam.players.11.lastName': playerInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: playerInfo.gameId
				}, {
					$set: {
						'awayTeam.players.11.firstName': playerInfo.firstName,
						'awayTeam.players.11.lastName': playerInfo.lastName
					}
				});
			}
		}
	},
	coachUpdate: function(coachInfo) {
		if (coachInfo.coachIndex === 0) {
			if (coachInfo.team === 'homeTeam') {
				Games.update({
					_id: coachInfo.gameId
				}, {
					$set: {
						'homeTeam.coachs.0.firstName': coachInfo.firstName,
						'homeTeam.coachs.0.lastName': coachInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: coachInfo.gameId
				}, {
					$set: {
						'awayTeam.coachs.0.firstName': coachInfo.firstName,
						'awayTeam.coachs.0.lastName': coachInfo.lastName
					}
				});
			}
		} else if (coachInfo.coachIndex === 1) {
			if (coachInfo.team === 'homeTeam') {
				Games.update({
					_id: coachInfo.gameId
				}, {
					$set: {
						'homeTeam.coachs.1.firstName': coachInfo.firstName,
						'homeTeam.coachs.1.lastName': coachInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: coachInfo.gameId
				}, {
					$set: {
						'awayTeam.coachs.1.firstName': coachInfo.firstName,
						'awayTeam.coachs.1.lastName': coachInfo.lastName
					}
				});
			}
		}
	},
	onePoint: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.0.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.0.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.0.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.1.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.1.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.1.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.2.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.2.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.2.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.3.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.3.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.3.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.4.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.4.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.4.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.5.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.5.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.5.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.6.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.6.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.6.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.7.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.7.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.7.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.8.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.8.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.8.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.9.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.9.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.9.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.10.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.10.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.10.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.11.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.11.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.11.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": 1
					}
				});
			}
		}
	},
	twoPoints: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.0.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.0.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.0.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.0.stats.evaluation": 2
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.1.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.1.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.1.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.1.stats.evaluation": 2
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.2.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.2.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.2.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.2.stats.evaluation": 2
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.3.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.3.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.3.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.3.stats.evaluation": 2
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.4.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.4.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.4.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.4.stats.evaluation": 2
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.5.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.5.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.5.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.5.stats.evaluation": 2
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.6.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.6.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.6.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.6.stats.evaluation": 2
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.7.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.7.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.7.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.7.stats.evaluation": 2
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.8.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.8.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.8.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.8.stats.evaluation": 2
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.9.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.9.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.9.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.9.stats.evaluation": 2
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.10.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.10.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.10.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.10.stats.evaluation ": 2
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.11.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.11.stats.evaluation ": 2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.11.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.11.stats.evaluation ": 2
					}
				});
			}
		}
	},
	threePoints: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.0.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.0.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.0.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.0.stats.evaluation": 3
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.1.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.1.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.1.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.1.stats.evaluation": 3
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.2.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.2.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.2.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.2.stats.evaluation": 3
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.3.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.3.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.3.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.3.stats.evaluation": 3
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.4.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.4.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.4.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.4.stats.evaluation": 3
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.5.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.5.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.5.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.5.stats.evaluation": 3
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.6.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.6.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.6.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.6.stats.evaluation": 3
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.7.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.7.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.7.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.7.stats.evaluation": 3
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.8.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.8.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.8.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.8.stats.evaluation": 3
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.9.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.9.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.9.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.9.stats.evaluation": 3
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.10.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.10.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.10.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.10.stats.evaluation": 3
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.11.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.11.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.11.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.11.stats.evaluation": 3
					}
				});
			}
		}
	},
	assists: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	offRebs: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	defRebs: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	offProvFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	steals: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	blocks: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	defProvFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	onePointMiss: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.0.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.0.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.1.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.1.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.2.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.2.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.3.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.3.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.4.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.4.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.5.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.5.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.6.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.6.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.7.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.7.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.8.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.8.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.9.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.9.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.10.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.10.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.11.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.11.stats.evaluation": -1
					}
				});
			}
		}
	},
	twoPointsMiss: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	threePointsMiss: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	turnovers: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	offFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	defFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	defFoulsOneFT: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	defFoulsTwoFT: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	defFoulsThreeFT: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	techFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	antiSportFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	disqualifyingFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	}
});

Meteor.methods({
	correctionOnePoint: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.0.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.0.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.0.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.0.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.1.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.1.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.1.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.1.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.2.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.2.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.2.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.2.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.3.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.3.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.3.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.3.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.4.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.4.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.4.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.4.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.5.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.5.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.5.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.5.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.6.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.6.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.6.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.6.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.7.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.7.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.7.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.7.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.8.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.8.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.8.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.8.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.9.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.9.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.9.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.9.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.10.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.10.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.10.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.10.stats.evaluation": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.onePointIn": -1,
						"gameStats.shoots.homeTeam.onePointIn": -1,
						"homeTeam.players.11.stats.points.totalPoints": -1,
						"gameStats.score.homeTeam": -1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.11.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.onePointIn": -1,
						"gameStats.shoots.awayTeam.onePointIn": -1,
						"awayTeam.players.11.stats.points.totalPoints": -1,
						"gameStats.score.awayTeam": -1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.11.stats.evaluation": -1
					}
				});
			}
		}
	},
	correctionTwoPoints: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.0.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.0.stats.evaluation": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.0.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.0.stats.evaluation": -2
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.1.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.1.stats.evaluation": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.1.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.1.stats.evaluation": -2
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.2.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.2.stats.evaluation": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.2.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.2.stats.evaluation": -2
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.3.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.3.stats.evaluation": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.3.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.3.stats.evaluation": -2
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.4.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.4.stats.evaluation": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.4.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.4.stats.evaluation": -2
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.5.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.5.stats.evaluation": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.5.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.5.stats.evaluation": -2
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.6.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.6.stats.evaluation": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.6.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.6.stats.evaluation": -2
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.7.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.7.stats.evaluation": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.7.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.7.stats.evaluation": -2
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.8.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.8.stats.evaluation": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.8.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.8.stats.evaluation": -2
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.9.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.9.stats.evaluation": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.9.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.9.stats.evaluation": -2
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.10.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.10.stats.evaluation": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.10.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.10.stats.evaluation ": -2
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.twoPointsIn": -1,
						"gameStats.shoots.homeTeam.twoPointsIn": -1,
						"homeTeam.players.11.stats.points.totalPoints": -2,
						"gameStats.score.homeTeam": -2,
						"gameStats.evaluation.homeTeam": -2,
						"homeTeam.players.11.stats.evaluation ": -2
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.twoPointsIn": -1,
						"gameStats.shoots.awayTeam.twoPointsIn": -1,
						"awayTeam.players.11.stats.points.totalPoints": -2,
						"gameStats.score.awayTeam": -2,
						"gameStats.evaluation.awayTeam": -2,
						"awayTeam.players.11.stats.evaluation ": -2
					}
				});
			}
		}
	},
	correctionThreePoints: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.0.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.0.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.0.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.0.stats.evaluation": -3
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.1.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.1.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.1.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.1.stats.evaluation": -3
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.2.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.2.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.2.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.2.stats.evaluation": -3
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.3.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.3.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.3.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.3.stats.evaluation": -3
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.4.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.4.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.4.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.4.stats.evaluation": -3
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.5.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.5.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.5.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.5.stats.evaluation": -3
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.6.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.6.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.6.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.6.stats.evaluation": -3
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.7.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.7.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.7.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.7.stats.evaluation": -3
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.8.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.8.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.8.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.8.stats.evaluation": -3
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.9.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.9.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.9.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.9.stats.evaluation": -3
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.10.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.10.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.10.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.10.stats.evaluation": -3
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.threePointsIn": -1,
						"gameStats.shoots.homeTeam.threePointsIn": -1,
						"homeTeam.players.11.stats.points.totalPoints": -3,
						"gameStats.score.homeTeam": -3,
						"gameStats.evaluation.homeTeam": -3,
						"homeTeam.players.11.stats.evaluation": -3
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.threePointsIn": -1,
						"gameStats.shoots.awayTeam.threePointsIn": -1,
						"awayTeam.players.11.stats.points.totalPoints": -3,
						"gameStats.score.awayTeam": -3,
						"gameStats.evaluation.awayTeam": -3,
						"awayTeam.players.11.stats.evaluation": -3
					}
				});
			}
		}
	},
	correctionAssists: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.assists": -1,
						"gameStats.assists.homeTeam": -1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.assists": -1,
						"gameStats.assists.awayTeam": -1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	correctionOffRebs: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.rebounds.offReb": -1,
						"gameStats.rebounds.homeTeam.offReb": -1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.rebounds.offReb": -1,
						"gameStats.rebounds.awayTeam.offReb": -1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	correctionDefRebs: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.rebounds.defReb": -1,
						"gameStats.rebounds.homeTeam.defReb": -1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.rebounds.defReb": -1,
						"gameStats.rebounds.awayTeam.defReb": -1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	correctionOffProvFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": -1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.provFouls.offFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": -1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	correctionSteals: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.steals": -1,
						"gameStats.steals.homeTeam": -1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.steals": -1,
						"gameStats.steals.awayTeam": -1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	correctionBlocks: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	correctionDefProvFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": -1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.provFouls.defFouls": -1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": -1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	},
	correctionOnePointMiss: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.0.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.1.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.2.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.3.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.4.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.5.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.6.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.7.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.8.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.9.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.10.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.onePointOut": -1,
						"gameStats.shoots.homeTeam.onePointOut": -1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.11.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.onePointOut": -1,
						"gameStats.shoots.awayTeam.onePointOut": -1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": 1
					}
				});
			}
		}
	},
	correctionTwoPointsMiss: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.twoPointsOut": -1,
						"gameStats.shoots.homeTeam.twoPointsOut": -1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.twoPointsOut": -1,
						"gameStats.shoots.awayTeam.twoPointsOut": -1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	correctionThreePointsMiss: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.threePointsOut": -1,
						"gameStats.shoots.homeTeam.threePointsOut": -1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.threePointsOut": -1,
						"gameStats.shoots.awayTeam.threePointsOut": -1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	correctionTurnovers: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.turnovers": -1,
						"gameStats.turnovers.homeTeam": -1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.turnovers": -1,
						"gameStats.turnovers.awayTeam": -1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	correctionOffFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.offFouls": -1,
						"gameStats.fouls.homeTeam.offFouls": -1,
						"homeTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.offFouls": -1,
						"gameStats.fouls.awayTeam.offFouls": -1,
						"awayTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	correctionDefFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul": -1,
						"gameStats.fouls.homeTeam.foul": -1,
						"homeTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul": -1,
						"gameStats.fouls.awayTeam.foul": -1,
						"awayTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	correctionDefFoulsOneFT: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul1FT": -1,
						"gameStats.fouls.homeTeam.foul1FT": -1,
						"homeTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul1FT": -1,
						"gameStats.fouls.awayTeam.foul1FT": -1,
						"awayTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	correctionDefFoulsTwoFT: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul2FT": -1,
						"gameStats.fouls.homeTeam.foul2FT": -1,
						"homeTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul2FT": -1,
						"gameStats.fouls.awayTeam.foul2FT": -1,
						"awayTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	correctionDefFoulsThreeFT: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul3FT": -1,
						"gameStats.fouls.homeTeam.foul3FT": -1,
						"homeTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul3FT": -1,
						"gameStats.fouls.awayTeam.foul3FT": -1,
						"awayTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	correctionTechFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.techFouls": -1,
						"gameStats.fouls.homeTeam.techFouls": -1,
						"homeTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.techFouls": -1,
						"gameStats.fouls.awayTeam.techFouls": -1,
						"awayTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	correctionAntiSportFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.homeTeam.antiSportFouls": -1,
						"homeTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.antiSportFouls": -1,
						"gameStats.fouls.awayTeam.antiSportFouls": -1,
						"awayTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	correctionDisqualifyingFouls: function(actionInfo) {
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.0.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.1.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.2.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.3.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.4.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.5.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.6.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.7.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.8.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.9.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.10.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": -1,
						"homeTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.homeTeam.totalFouls": -1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.disqualifyingFouls": -1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": -1,
						"awayTeam.players.11.stats.fouls.totalFouls": -1,
						"gameStats.fouls.awayTeam.totalFouls": -1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	}
});
