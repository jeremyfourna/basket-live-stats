Template.home.helpers({
	game: function() {
		return Games.find({
			state: {
				$not: "gameEnded"
			},
			privateGame: false
		}, {
			fields: {
				'gameInfos': 1,
				'gameStats.score': 1,
				'state': 1
			},
			limit: 3
		});
	},
	endedGame: function() {
		return Games.find({
			state: "gameEnded",
			privateGame: false
		}, {
			fields: {
				'gameInfos': 1,
				'gameStats.score': 1,
				'state': 1
			},
			limit: 3
		});
	}
});
