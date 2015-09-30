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
	},
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
	},
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