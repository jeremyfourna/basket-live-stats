Template.home.helpers({
	game: function() {
		return Games.find({
			state: {
				$nin: ['gameEnded', 'notStarted']
			},
			privateGame: false
		}, {
			fields: {
				'gameInfos': 1,
				'gameStats.score': 1,
				'state': 1
			},
			limit: 3,
			sort: {
				createdAt: -1
			}
		});
	},
	endedGame: function() {
		return Games.find({
			state: 'gameEnded',
			privateGame: false
		}, {
			fields: {
				'gameInfos': 1,
				'gameStats.score': 1,
				'state': 1
			},
			limit: 3,
			sort: {
				createdAt: -1
			}
		});
	}
});
