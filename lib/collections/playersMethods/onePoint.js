Meteor.methods({
	onePoint: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.onePointIn": 1,
				"stats.points.totalPoints": 1,
				"stats.evaluation": 1
			}
		});
	},
	correctionOnePoint: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.onePointIn": -1,
				"stats.points.totalPoints": -1,
				"stats.evaluation": -1
			}
		});
	}
});
