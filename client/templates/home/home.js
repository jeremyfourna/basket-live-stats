Template.home.helpers({
	game: function() {
		return Games.find({
			gameState: {
				$nin: ['gameEnded', 'notStarted']
			},
			privateGame: false,
			setupComplete: true
		}, {
			fields: {
				'gameInfos': 1,
				'stats.homeTeam.score': 1,
				'stats.awayTeam.score': 1,
				'gameState': 1
			},
			limit: 3,
		});
	},
	endedGame: function() {
		return Games.find({
			gameState: 'gameEnded',
			privateGame: false,
			setupComplete: true
		}, {
			fields: {
				'gameInfos': 1,
				'stats.homeTeam.score': 1,
				'stats.awayTeam.score': 1,
				'gameState': 1
			},
			limit: 3,
		});
	}
});
