Meteor.methods({
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
	}
});
