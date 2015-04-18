Template.liveMatchs.helpers({
	game: function() {
		return Games.find({
			state: {
				$not: "gameEnded"
			}
		}, {
			fields: {
				'gameInfos': 1,
				'gameStats.score': 1,
				'state': 1
			}
		});
	}
});
