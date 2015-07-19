Meteor.methods({
	goingOnTheBench: function(gameId, playerData) {
		check(gameId, {
			_id: String
		});
		check(playerData, {
			team: String,
			playerIndex: Number,
			minutes: Number,
			secondes: Number,
			state: String
		});
		if (playerData.playerIndex === 0) {
			if (playerData.team === "homeTeam") {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"homeTeam.players.0.inPlay": false,
					},
					$push: {
						"homeTeam.players.0.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.0.inPlay": false,
					},
					$push: {
						"awayTeam.players.0.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
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
					},
					$push: {
						"homeTeam.players.1.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.1.inPlay": false,
					},
					$push: {
						"awayTeam.players.1.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
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
					},
					$push: {
						"homeTeam.players.2.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.2.inPlay": false,
					},
					$push: {
						"awayTeam.players.2.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
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
					},
					$push: {
						"homeTeam.players.3.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.3.inPlay": false,
					},
					$push: {
						"awayTeam.players.3.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
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
					},
					$push: {
						"homeTeam.players.4.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.4.inPlay": false,
					},
					$push: {
						"awayTeam.players.4.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
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
					},
					$push: {
						"homeTeam.players.5.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.5.inPlay": false,
					},
					$push: {
						"awayTeam.players.5.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
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
					},
					$push: {
						"homeTeam.players.6.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.6.inPlay": false,
					},
					$push: {
						"awayTeam.players.6.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
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
					},
					$push: {
						"homeTeam.players.7.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.7.inPlay": false,
					},
					$push: {
						"awayTeam.players.7.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
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
					},
					$push: {
						"homeTeam.players.8.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.8.inPlay": false,
					},
					$push: {
						"awayTeam.players.8.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
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
					},
					$push: {
						"homeTeam.players.9.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.9.inPlay": false,
					},
					$push: {
						"awayTeam.players.9.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
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
					},
					$push: {
						"homeTeam.players.10.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.10.inPlay": false,
					},
					$push: {
						"awayTeam.players.10.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
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
					},
					$push: {
						"homeTeam.players.11.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			} else {
				Games.update({
					_id: gameId._id
				}, {
					$set: {
						"awayTeam.players.11.inPlay": false,
					},
					$push: {
						"awayTeam.players.11.gameTime": {
							minutes: playerData.minutes,
							secondes: playerData.secondes,
							way: 'out',
							state: playerData.state
						}
					}
				});
			}
		}
	}
});
