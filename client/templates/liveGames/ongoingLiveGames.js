Template.ongoingLiveGames.helpers({
	game: function() {
		return Games.find({
			privateGame: false,
			gameState: {
				$nin: ['notStarted', 'gameEnded']
			}
		}, {
			fields: {
				'gameInfos': 1,
				'gameState': 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1
			}
		});
	}
});
