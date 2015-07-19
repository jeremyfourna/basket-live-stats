Meteor.methods({
	stateSwitchEndedGames: function(gameId, playerData) {
		check(gameId, {
			_id: String
		});
		check(playerData, {
			team: String,
			playerIndex: Number
		});
		if (playerData.playerIndex === 0) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.0.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.0.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.0.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.0.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		} else if (playerData.playerIndex === 1) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.1.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.1.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.1.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.1.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		} else if (playerData.playerIndex === 2) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.2.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.2.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.2.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.2.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		} else if (playerData.playerIndex === 3) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.3.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.3.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.3.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.3.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		} else if (playerData.playerIndex === 4) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.4.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.4.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.4.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.4.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		} else if (playerData.playerIndex === 5) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.5.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.5.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.5.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.5.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		} else if (playerData.playerIndex === 6) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.6.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.6.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.6.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.6.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		} else if (playerData.playerIndex === 7) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.7.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.7.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.7.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.7.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		} else if (playerData.playerIndex === 8) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.8.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.8.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.8.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.8.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		} else if (playerData.playerIndex === 9) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.9.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.9.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.9.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.9.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		} else if (playerData.playerIndex === 10) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.10.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.10.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.10.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.10.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		} else if (playerData.playerIndex === 11) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.11.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"homeTeam.players.11.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.11.inPlay": false,
						state: 'gameEnded'
					},
					$push: {
						"awayTeam.players.11.gameTime": {
							minutes: 0,
							secondes: 0,
							way: 'out',
							state: 'gameEnded'
						}
					}
				});
			}
		}
	}
});
