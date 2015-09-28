Meteor.methods({
	assists: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.assists": 1,
				"stats.evaluation": 1
			}
		});
	},
	correctionAssists: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.assists": -1,
				"stats.evaluation": -1
			}
		});
	}
});
