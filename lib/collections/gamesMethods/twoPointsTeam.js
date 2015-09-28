Meteor.methods({
	twoPointsTeamYourClub: function(gameId, evolScore) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.points.twoPointsIn": 1,
				"stats.yourClub.score": 2,
				"stats.yourClub.evaluation": 2,
			},
			$push: {
				"stats.evolution": [evolScore.gameIndex, evolScore.scoreGap]
			}
		});
	},
	twoPointsTeamOpponent: function(gameId, evolScore) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.opponent.points.twoPointsIn": 1,
				"stats.opponent.score": 2,
				"stats.opponent.evaluation": 2,
			},
			$push: {
				"stats.evolution": [evolScore.gameIndex, evolScore.scoreGap]
			}
		});
	},
	correctionTwoPointsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.points.twoPointsIn": -1,
				"stats.yourClub.score": -2,
				"stats.yourClub.evaluation": -2,
			},
			$pop: {
				"stats.evolution": 1
			}
		});
	},
	correctionTwoPointsTeamOpponent: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.opponent.points.twoPointsIn": -1,
				"stats.opponent.score": -2,
				"stats.opponent.evaluation": -2,
			},
			$pop: {
				"stats.evolution": 1
			}
		});
	}
});
