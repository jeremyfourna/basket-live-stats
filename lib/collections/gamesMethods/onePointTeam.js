Meteor.methods({
	onePointTeamYourClub: function(gameId, evolScore) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.points.onePointIn": 1,
				"stats.yourClub.score": 1,
				"stats.yourClub.evaluation": 1,
			},
			$push: {
				"stats.evolution": [evolScore.gameIndex, evolScore.scoreGap]
			}
		});
	},
	onePointTeamOpponent: function(gameId, evolScore) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.opponent.points.onePointIn": 1,
				"stats.opponent.score": 1,
				"stats.opponent.evaluation": 1,
			},
			$push: {
				"stats.evolution": [evolScore.gameIndex, evolScore.scoreGap]
			}
		});
	},
	correctionOnePointTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.points.onePointIn": -1,
				"stats.yourClub.score": -1,
				"stats.yourClub.evaluation": -1,
			},
			$pop: {
				"stats.evolution": 1
			}
		});
	},
	correctionOnePointTeamOpponent: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.opponent.points.onePointIn": -1,
				"stats.opponent.score": -1,
				"stats.opponent.evaluation": -1,
			},
			$pop: {
				"stats.evolution": 1
			}
		});
	}
});
