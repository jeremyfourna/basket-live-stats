Meteor.methods({
	steals: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.steals": 1,
				"stats.evaluation": 1
			}
		});
	},
	correctionSteals: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.steals": -1,
				"stats.evaluation": -1
			}
		});
	}
});
