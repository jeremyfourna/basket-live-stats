Meteor.methods({
	twoPoints: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.twoPointsIn": 1,
				"stats.points.totalPoints": 2,
				"stats.evaluation": 2
			}
		});
	},
	correctionTwoPoints: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.twoPointsIn": -1,
				"stats.points.totalPoints": -2,
				"stats.evaluation": -2
			}
		});
	}
});
