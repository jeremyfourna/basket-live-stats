Games = new Mongo.Collection('games');

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
	}
});
