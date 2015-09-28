Meteor.methods({
	threePoints: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.threePointsIn": 1,
				"stats.points.totalPoints": 3,
				"stats.evaluation": 3
			}
		});
	},
	correctionThreePoints: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.threePointsIn": -1,
				"stats.points.totalPoints": -3,
				"stats.evaluation": -3
			}
		});
	}
});
