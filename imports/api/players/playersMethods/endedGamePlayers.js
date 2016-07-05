Meteor.methods({
	endedGamesPlayers: function(gameId) {
		Players.update({
			gameId: gameId
		}, {
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
	}
});
