Meteor.methods({
	threePointsTeamYourClub: function(gameId, evolScore) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.points.threePointsIn": 1,
				"stats.yourClub.score": 3,
				"stats.yourClub.evaluation": 3,
			},
			$push: {
				"stats.evolution": [evolScore.gameIndex, evolScore.scoreGap]
			}
		});
	},
	threePointsTeamOpponent: function(gameId, evolScore) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.opponent.points.threePointsIn": 1,
				"stats.opponent.score": 3,
				"stats.opponent.evaluation": 3,
			},
			$push: {
				"stats.evolution": [evolScore.gameIndex, evolScore.scoreGap]
			}
		});
	},
	correctionThreePointsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.points.threePointsIn": -1,
				"stats.yourClub.score": -3,
				"stats.yourClub.evaluation": -3,
			},
			$pop: {
				"stats.evolution": 1
			}
		});
	},
	correctionThreePointsTeamOpponent: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.opponent.points.threePointsIn": -1,
				"stats.opponent.score": -3,
				"stats.opponent.evaluation": -3,
			},
			$pop: {
				"stats.evolution": 1
			}
		});
	}
});
